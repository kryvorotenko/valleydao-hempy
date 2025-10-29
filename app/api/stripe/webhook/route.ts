import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export const config = {
    api: {
        bodyParser: false,
    },
};

// Telegram config
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID!;

async function sendTelegramMessage(text: string) {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_GROUP_ID,
            text,
            parse_mode: 'Markdown',
        }),
    });
}

export async function POST(req: Request) {
    const sig = req.headers.get('stripe-signature');
    const rawBody = await req.text();

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error('❌ Webhook signature verification failed:', err.message);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    switch (event.type) {
        case 'payment_intent.succeeded': {
            const paymentIntent = event.data.object as Stripe.PaymentIntent;
            const meta = paymentIntent.metadata;

            const message = `
✅ *New order is paid!*

👤 Name: *${meta.firstName} ${meta.lastName}*
✉️ Email: *${meta.email}*
✉️ Wallet: *${meta.wallet || '-'}*

🌍 Address: *${meta.country}, ${meta.zipCode} ${meta.city}, ${meta.street}*

🎽 Item: *${paymentIntent.description}*
💰 Amount: *${paymentIntent.amount / 100} ${paymentIntent.currency.toUpperCase()}*
`;

            await sendTelegramMessage(message);
            break;
        }

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
}
