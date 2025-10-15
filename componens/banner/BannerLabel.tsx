interface PropsType {
    reverse?: boolean;
    text: string;
    icon: React.ReactNode;
    color: 'yellow' | 'orange' | 'blue' | 'lemon';
}

export default function BannerLabel({ reverse = false, text, icon, color }: PropsType) {
    return (
        <div className={`banner-label ${reverse ? 'reverse' : ''}`}>
            {icon}
            <span className={`banner-label-text ${color}`}>{text}</span>
        </div>
    );
}
