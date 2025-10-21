import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode, RefObject } from 'react';

interface PropsType {
    icon?: ReactNode;
    title?: ReactNode | string;
    href?: string;
    onClick?: () => void;
    color?: 'orange' | 'yellow' | 'original';
    className?: string;
    disabled?: boolean;
    ref?: RefObject<HTMLButtonElement | null>;
    type?: ButtonHTMLAttributes<unknown>['type'];
}

export default function Button({
    icon,
    disabled = false,
    ref,
    title,
    href,
    onClick,
    color = 'orange',
    type = 'button',
    className,
}: PropsType) {
    return href ? (
        <Link
            href={href}
            aria-disabled={disabled}
            className={`button ${className} ${color} ${icon ? 'icon' : ''} ${title ? 'text' : ''}`}
        >
            {icon && icon}
            {title && title}
        </Link>
    ) : (
        <button
            ref={ref}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${className} ${color}  ${icon ? 'icon' : ''} ${title ? 'text' : ''}`}
        >
            {icon && icon}
            {title && title}
        </button>
    );
}
