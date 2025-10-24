import Button from '@/componens/ui/Button';
import EagleFaceIcon from '@/icon/EagleFaceIcon';
import LizardHeadIcon from '@/icon/LizardHeadIcon';
import SwooshIcon from '@/icon/SwooshIcon';
import TelegramIcon from '@/icon/TelegramIcon';
import XIcon from '@/icon/XIcon';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface PropsType {
    isOpen: boolean;
    onClose: () => void;
}

export default function HeaderBurger({ isOpen, onClose }: PropsType) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNavClick = (id: string) => {
        window.location.href = `/#${id}`;
        onClose();
    };

    return (
        <div className={`header-burger ${isOpen ? 'opened' : ''}`}>
            <div className="container">
                <Image
                    className="header-burger-img"
                    src="/img/banner-mobile.png"
                    alt="header burger"
                    width={390}
                    height={810}
                />
                <div className="header-burger-nav">
                    <ul className="header-burger-nav-list">
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#about')}>
                            <span>About HEMPY</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#story')}>
                            <span>Roadmap</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#hempynomics')}>
                            <span>Hempynomics</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#faq')}>
                            <span>FAQ</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#')}>
                            <span>Litepaper</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#product')}>
                            <span>Shop</span>
                        </li>
                    </ul>
                </div>
                <div className="header-burger-socials">
                    <Button icon={<TelegramIcon />} />
                    <Button icon={<XIcon />} />
                    <Button icon={<EagleFaceIcon />} />
                    <Button icon={<LizardHeadIcon />} />
                    <Button icon={<SwooshIcon />} />
                    <Button title={'Sign-up'} />
                </div>
                <p className="header-burger-copyright">Powered by ValleyDAO</p>
            </div>
        </div>
    );
}
