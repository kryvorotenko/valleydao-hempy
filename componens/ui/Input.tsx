interface PropsType {
    label?: string;
    type?: string;
    placeholder?: string;
    className?: string;
}

export default function Input({ label, placeholder, type = 'text', className }: PropsType) {
    return (
        <div className={`input ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <input className="input-field" placeholder={placeholder} type={type} />
        </div>
    );
}
