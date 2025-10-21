import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const productSizesData = {
    s: {
        name: 'Hemp Hoodie S',
        price: 109,
        description: 'The most planet friendly hoodie you’ll ever wear',
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/_next/image?url=%2Fimg%2Fproduct%2Fslide1.png&w=1080&q=75`,
    },
    m: {
        name: 'Hemp Hoodie M',
        price: 109,
        description: 'The most planet friendly hoodie you’ll ever wear',
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/_next/image?url=%2Fimg%2Fproduct%2Fslide1.png&w=1080&q=75`,
    },
    l: {
        name: 'Hemp Hoodie L',
        price: 109,
        description: 'The most planet friendly hoodie you’ll ever wear',
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/_next/image?url=%2Fimg%2Fproduct%2Fslide1.png&w=1080&q=75`,
    },
    xl: {
        name: 'Hemp Hoodie XL',
        price: 109,
        description: 'The most planet friendly hoodie you’ll ever wear',
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/_next/image?url=%2Fimg%2Fproduct%2Fslide1.png&w=1080&q=75`,
    },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
    try {
        const { size } = await req.json();
        if (!size || !['s', 'm', 'l', 'xl'].includes(size)) {
            return NextResponse.json({ error: 'Unsupported size' }, { status: 400 });
        }

        const data = productSizesData[size as keyof typeof productSizesData];
        if (!data) {
            return NextResponse.json({ error: 'Error while product data fetching happened' }, { status: 500 });
        }

        const session = await stripe.checkout.sessions.create({
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-cancel`,
            payment_method_types: ['card'],
            mode: 'payment',

            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'PL', 'DE'],
            },

            customer_creation: 'always',
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: 'usd',
                        unit_amount: data.price * 100,
                        product_data: {
                            name: data.name,
                            description: data.description,
                            images: [data.image],
                        },
                    },
                },
            ],
        });

        return NextResponse.json({ url: session.url });
    } catch (error: unknown) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        console.error('Stripe error:', error.message);
        return NextResponse.json({ error: 'Error while creating checkout session' }, { status: 500 });
    }
}
