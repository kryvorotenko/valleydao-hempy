'use client';

import { OrderFormData } from '@/componens/OrderPopup';
import Button from '@/componens/ui/Button';
import Input from '@/componens/ui/Input';
import CheckSmallIcon from '@/icon/CheckSmallIcon';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';





interface Props {
    size: string;
    onBack: () => void;
    onSubmit: (data: OrderFormData) => void;
}

export default function OrderPopupMethod({ size, onBack, onSubmit }: Props) {
    const router = useRouter();
    const {
        handleSubmit,
        register,
        watch,
        getValues,
        formState: { errors },
    } = useFormContext<OrderFormData>();

    const agree = watch('agree');
    const stripe = useStripe();

    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handlePayment = async () => {
        const data = getValues();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/stripe/payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, size }),
            });

            const { clientSecret, error: apiError } = await res.json();
            if (apiError || !clientSecret) throw new Error(apiError || 'PaymentIntent creation failed');

            if (!stripe || !elements) throw new Error('Stripe not loaded');
            const cardElement = elements.getElement(CardNumberElement);

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement!,
                    billing_details: {
                        name: `${data.firstName} ${data.lastName}`,
                        email: data.email,
                        address: {
                            line1: data.street,
                            postal_code: data.zipCode,
                            city: data.city,
                            country: data.country,
                        },
                    },
                },
            });

            if (result.error) {
                setError(result.error.message || 'Payment failed');
            } else if (result.paymentIntent?.status === 'succeeded') {
                await router.push('/order-success');
                setSuccess(true);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="order-popup-method" onSubmit={handleSubmit(handlePayment)}>
            <h3 className="order-popup-method-title">Payment Method</h3>

            {/*<Button title="Pay by Crypto" icon={<BitcoinIcon />} className="order-popup-method-button" color="yellow" />*/}

            <div className="order-popup-method-row">
                {/*<span>Change payment method</span>*/}
                {/*<div className="order-popup-method-row-content">*/}
                {/*    <button type="button" className="order-popup-method-row-button">*/}
                {/*        <AppleIcon /> Pay*/}
                {/*    </button>*/}
                {/*    <button type="button" className="order-popup-method-row-button">*/}
                {/*        <GoogleIcon /> Pay*/}
                {/*    </button>*/}
                {/*    <button type="button" className="order-popup-method-row-button">*/}
                {/*        <CardIcon /> Card*/}
                {/*    </button>*/}
                {/*</div>*/}

                <Input label="Have a discount code?" placeholder="Enter your code here" {...register('discountCode')} />

                <label className="input">
                    <span className="input-label">Card number</span>
                    <CardNumberElement
                        options={{ classes: { base: 'input-field' }, placeholder: 'Enter your Card number' }}
                    />
                </label>

                <div className="order-popup-method-data">
                    <label className="input">
                        <span className="input-label">Expiry</span>
                        <CardExpiryElement options={{ classes: { base: 'input-field' } }} />
                    </label>
                    <label className="input">
                        <span className="input-label">CVV</span>
                        <CardCvcElement options={{ classes: { base: 'input-field' } }} />
                    </label>
                </div>

                <div className="order-popup-method-radio">
                    <label className="order-popup-method-radio-label">
                        <input
                            type="checkbox"
                            {...register('agree', {
                                validate: {
                                    required: (v) => v || 'You must agree to the terms & conditions',
                                },
                            })}
                            className="order-popup-method-radio-input"
                        />
                        <span className="order-popup-method-radio-icon">
                            <CheckSmallIcon isChecked={agree} />
                        </span>
                        <span className="order-popup-method-radio-text">I agree to the terms & conditions</span>
                    </label>
                    {errors.agree && <p className="input-error">{errors.agree.message}</p>}
                </div>

                {error && <p className="input-error text-center">{error}</p>}
                {success && <p className="input-success text-center">Payment successful ✅</p>}

                <div className="order-popup-method-buttons">
                    <Button
                        title="Back"
                        type="button"
                        color="original"
                        onClick={onBack}
                        className="order-popup-method-button-secondary"
                    />
                    <Button
                        title={loading ? 'Processing...' : 'Pre-order now'}
                        type="submit"
                        className="order-popup-method-button"
                        disabled={loading}
                    />
                </div>
            </div>
        </form>
    );
}
