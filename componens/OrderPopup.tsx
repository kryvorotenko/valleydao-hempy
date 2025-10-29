'use client';

import OrderPopupDetails from '@/componens/order-popup/OrderPopupDetails';
import OrderPopupMethod from '@/componens/order-popup/OrderPopupMethod';
import Button from '@/componens/ui/Button';
import CloseIcon from '@/icon/CloseIcon';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export interface OrderFormData {
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    zipCode: string;
    city: string;
    country: string;
    wallet: string;
    discountCode?: string;
    agree: boolean;
}

interface PropsType {
    onClick?: () => void;
    size: string;
}

export default function OrderPopup({ onClick, size }: PropsType) {
    const [step, setStep] = useState<1 | 2>(1);
    const methods = useForm<OrderFormData>({
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            street: '',
            zipCode: '',
            city: '',
            country: '',
            wallet: '',
            agree: false,
        },
    });

    const handleNext = async () => {
        const valid = await methods.trigger([
            'firstName',
            'lastName',
            'email',
            'street',
            'zipCode',
            'city',
            'country',
            'wallet',
        ]);
        if (valid) setStep(2);
    };

    const handleBack = () => setStep(1);

    const handleSubmit = async (data: OrderFormData) => {
        console.log('✅ Sending to Stripe...', data);
        // здесь ты интегрируешь Stripe paymentIntent / confirmCardPayment
    };

    return (
        <Elements stripe={stripePromise}>
            <FormProvider {...methods}>
                <div className="order-popup" onClick={onClick}>
                    <div onClick={(e) => e.stopPropagation()} className="order-popup-content">
                        <div className="order-popup-header">
                            <h3 className="order-popup-header-title">Pre-order now</h3>
                            <Button className="order-popup-header-button" icon={<CloseIcon />} onClick={onClick} />
                        </div>

                        <div className="order-popup-summary-wrapper">
                            <div className="order-popup-summary">
                                <div className="order-popup-main">
                                    <div className="order-popup-main-context">
                                        <h4 className="order-popup-main-title">Your Order Summary</h4>
                                        <div className="order-popup-main-wrapper">
                                            <Image
                                                src="/img/order/order-item.png"
                                                alt="order image"
                                                width={120}
                                                height={120}
                                            />
                                            <div className="order-popup-main-description">
                                                <h5 className="order-popup-main-description-title">Hemp Hoodie</h5>
                                                <span className="order-popup-main-description-span">Size: {size}</span>
                                                <span className="order-popup-main-description-span">
                                                    Color: Dark Sapphire
                                                </span>
                                                <div className="order-popup-main-description-price">
                                                    <span className="pre-order">
                                                        Pre-order: <span>$109</span>
                                                    </span>
                                                    <span className="free">Free shipping</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {step === 1 && <OrderPopupDetails onNext={handleNext} />}
                                    {step === 2 && (
                                        <OrderPopupMethod size={size} onBack={handleBack} onSubmit={handleSubmit} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FormProvider>
        </Elements>
    );
}
