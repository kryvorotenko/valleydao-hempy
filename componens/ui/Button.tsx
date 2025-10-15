import Link from 'next/link';
import { ReactNode, RefObject } from 'react';

interface PropsType {
    icon?: ReactNode;
    title?: string;
    href?: string;
    onClick?: () => void;
    color?: 'orange' | 'yellow';
    className?: string;
    ref?: RefObject<HTMLButtonElement | null>;
}

export default function Button({ icon, ref, title, href, onClick, color = 'orange', className }: PropsType) {
    return href ? (
        <Link href={href} className={`button ${className} ${color} ${icon ? 'icon' : 'text'}`}>
            {icon && icon}
            {title && title}
        </Link>
    ) : (
        <button
            ref={ref}
            type="button"
            onClick={onClick}
            className={`button ${className} ${color}  ${icon ? 'icon' : 'text'}`}
        >
            {icon && icon}
            {title && title}
        </button>
    );
}
