'use client';

import { OrderFormData } from '@/componens/OrderPopup';
import Button from '@/componens/ui/Button';
import Input from '@/componens/ui/Input';
import Select from '@/componens/ui/Select';
import { minLength, pattern, required } from '@/hooks/useFormValidation';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
    onNext: () => void;
}

export default function OrderPopupDetails({ onNext }: Props) {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useFormContext<OrderFormData>();

    const onSubmit = () => onNext();

    return (
        <form className="order-popup-details" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="order-popup-details-title">Your Details</h3>

            <div className="order-popup-details-row">
                <Input
                    label="First Name"
                    placeholder="Enter your First Name"
                    {...register('firstName', {
                        validate: {
                            required: (v) => required().validate(v) || required().message,
                            minLen: (v) => minLength(2).validate(v) || minLength(2).message,
                        },
                    })}
                    error={errors.firstName}
                />
                <Input
                    label="Last Name"
                    placeholder="Enter your Last Name"
                    {...register('lastName', {
                        validate: {
                            required: (v) => required().validate(v) || required().message,
                            minLen: (v) => minLength(2).validate(v) || minLength(2).message,
                        },
                    })}
                    error={errors.lastName}
                />
            </div>

            <Input
                label="Email"
                type="email"
                placeholder="Enter your Email"
                {...register('email', {
                    validate: {
                        required: (v) => required().validate(v) || required().message,
                        email: (v) =>
                            pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email').validate(v) ||
                            'Invalid email format',
                    },
                })}
                error={errors.email}
            />

            <Input
                label="Street Name and Number"
                placeholder="Your Street Name and Number"
                {...register('street', { validate: { required: (v) => required().validate(v) || required().message } })}
                error={errors.street}
            />

            <Input
                label="Zip Code"
                placeholder="Enter your Zip Code"
                {...register('zipCode', {
                    validate: { required: (v) => required().validate(v) || required().message },
                })}
                error={errors.zipCode}
            />

            <Input
                label="City"
                placeholder="Enter your City"
                {...register('city', { validate: { required: (v) => required().validate(v) || required().message } })}
                error={errors.city}
            />

            <Controller
                control={control}
                name="country"
                rules={{
                    validate: { required: (v) => required('Select your country').validate(v) || 'Select your country' },
                }}
                render={({ field }) => (
                    <Select
                        label="Enter your Country"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.country}
                    />
                )}
            />

            <Input
                label="BASE Wallet Address"
                placeholder="Enter your BASE wallet address"
                {...register('wallet', { validate: {} })}
                error={errors.wallet}
            />

            <Button className="order-popup-details-button" title="Continue" type="submit" />
        </form>
    );
}
