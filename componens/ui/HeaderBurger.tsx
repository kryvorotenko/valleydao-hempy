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

    // const handleNavClick = (id: string) => {
    //     window.location.href = `/#${id}`;
    //     onClose();
    // };

    const handleNavClick = (link: string) => {
        if (link.startsWith('http')) {
            window.location.href = link;
        } else {
            window.location.href = link;
        }
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
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#product')}>
                            <span>Shop</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#about')}>
                            <span>About HEMPY</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#story')}>
                            <span>Roadmap</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('https://hempy.science')}>
                            <span>Hempy Token</span>
                        </li>
                        <li className="header-burger-nav-item" onClick={() => handleNavClick('/#faq')}>
                            <span>FAQ</span>
                        </li>
                        {/*<li className="header-burger-nav-item" onClick={() => handleNavClick('/#')}>*/}
                        {/*    <span>Litepaper</span>*/}
                        {/*</li>*/}
                    </ul>
                </div>
                <div className="header-burger-socials">
                    <Button icon={<TelegramIcon/>} href={'https://t.me/hempycommunity '}/>
                    <Button icon={<XIcon />} href={'https://x.com/hempydotscience'}/>
                    <Button icon={<EagleFaceIcon />} href={'https://dexscreener.com/base/0x41c4d3ec8f7c4a6a3fb43f4c18f8b7296fab4bcd'}/>
                    {/*<Button icon={<LizardHeadIcon />} />*/}
                    {/*<Button icon={<SwooshIcon />} />*/}
                    <Button title={'Pre-Order'} href={'#product'}/>
                </div>
                <p className="header-burger-copyright">Powered by ValleyDAO</p>
            </div>
        </div>
    );
}
