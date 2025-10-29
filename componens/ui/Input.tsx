'use client';

import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
}

export default function Input({ label, error, className, ...rest }: InputProps) {
    return (
        <div className={`input ${className ?? ''}`}>
            {label && <label className="input-label">{label}</label>}
            <input {...rest} className={`input-field ${error ? 'error' : ''}`} />
            {error && <p className="input-error">{error.message}</p>}
        </div>
    );
}
