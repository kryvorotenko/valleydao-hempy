interface PropsType {
    icon: React.ReactNode;
    title: string;
}

export default function ProductDescriptionItem({ icon, title }: PropsType) {
    return (
        <span className="product-descriptions-item">
            {icon}
            <span>{title}</span>
        </span>
    );
}
