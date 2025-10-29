import { FieldErrors, FieldValues } from 'react-hook-form';

export interface ValidationRule {
    validate: (value: any) => boolean;
    message: string;
}

export const required = (message = 'This field is required'): ValidationRule => ({
    validate: (value) => value !== undefined && value !== null && value !== '',
    message,
});

export const minLength = (min: number, message?: string): ValidationRule => ({
    validate: (value) => typeof value === 'string' && value.length >= min,
    message: message ?? `Minimum length is ${min} characters`,
});

export const maxLength = (max: number, message?: string): ValidationRule => ({
    validate: (value) => typeof value === 'string' && value.length <= max,
    message: message ?? `Maximum length is ${max} characters`,
});

export const pattern = (regex: RegExp, message: string): ValidationRule => ({
    validate: (value) => regex.test(value),
    message,
});

// функция для получения первого сообщения об ошибке
export const getErrorMessage = <T extends FieldValues>(
    errors: FieldErrors<T>,
    name: keyof T
): string | undefined => {
    const fieldError = errors[name];
    if (!fieldError) return undefined;
    if ('message' in fieldError) return fieldError.message as string;
    return undefined;
};
