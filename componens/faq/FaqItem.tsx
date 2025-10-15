'use client';

import Button from '@/componens/ui/Button';
import ArrowDownIcon from '@/icon/ArrowDownIcon';
import React, {useRef} from 'react';

interface PropsType {
    title: string;
    text: string;
}

export default function FaqItem({ title, text }: PropsType) {
    const [isOpen, setIsOpen] = React.useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="faq-item">
            <div className="faq-item-header " onClick={toggleOpen}>
                <p className="faq-item-header-title">{title}</p>
                <Button className="faq-item-header-button" icon={<ArrowDownIcon />}  />
            </div>
            <div ref={contentRef}
                 className="faq-item-answer-wrapper"
                 style={{
                     maxHeight: isOpen
                         ? `${contentRef.current?.scrollHeight}px`
                         : '0px',
                 }}>
               <div className="faq-item-answer">{text}</div>
            </div>
        </div>
    );
}
