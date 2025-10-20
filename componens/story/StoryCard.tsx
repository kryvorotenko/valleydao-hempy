import Image from 'next/image';

interface PropsType {
    img: string;
    title: string;
    color: 'green' | 'purple' | 'pink' | 'orange';
    text: React.ReactNode;
    list?: string[];
}

export default function StoryCard({ img, title, color, text, list }: PropsType) {
    return (
        <div className={`story-card ${color}`}>
            <Image className="story-card-img" src={img} alt={'story card'} width={240} height={378} />
            <h3 className="story-card-title">{title}</h3>
            <div className='story-card-text-wrapper'><span className='story-card-text'>{text}</span>
            {list && (
                <ul className='story-card-list'>
                    {list.map((item, i) => (
                        <li className='story-card-list-item' key={i}>{item}</li>
                    ))}
                </ul>
            )}</div>
        </div>
    );
}
