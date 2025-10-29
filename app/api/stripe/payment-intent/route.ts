import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const data = await req.json();

        console.log({data})

        const amount = 10900; // $109.00 в центах

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            description: `Pre-order Hemp Hoodie (${data.size})`,
            metadata: data,
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.error('Stripe error:', err);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}
