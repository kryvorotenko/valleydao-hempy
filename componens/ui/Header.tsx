'use client';

import Button from '@/componens/ui/Button';
import HeaderBurger from '@/componens/ui/HeaderBurger';
import BurgerIcon from '@/icon/BurgerIcon';
import EagleFaceIcon from '@/icon/EagleFaceIcon';
import LizardHeadIcon from '@/icon/LizardHeadIcon';
import LogoIcon from '@/icon/LogoIcon';
import SwooshIcon from '@/icon/SwooshIcon';
import TelegramIcon from '@/icon/TelegramIcon';
import XIcon from '@/icon/XIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isBurgerOpen, setBurgerOpen] = React.useState(false);

    const burgerOpen = () => {
        setIsOpen((prev) => !prev);
        document.body.style.overflow = !isOpen ? 'hidden' : 'initial';
        window.scrollTo({ top: 0, left: 0 });
    };

    return (
        <header className="header">
            <div className="header-running-line">
                <div className="header-running-line-wrapper">
                    <span>
                        Join our platform today to unlock exclusive benefits
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Join our platform today to unlock exclusive benefits
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Join our platform today to unlock exclusive benefits
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Join our platform today to unlock exclusive benefits
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Join our platform today to unlock exclusive benefits
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="header-content">
                    <div className="header-main">
                        <Link className="header-logo" href="/">
                            <LogoIcon />
                        </Link>
                        <nav className="header-nav">
                            <ul className="header-nav-row">
                                <li className="header-nav-item">
                                    <Link href="/#about">About HEMPY</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#story">Roadmap</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#hempynomics">Hempynomics</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#faq">FAQ</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#">Litepaper</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#product">Shop</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-socials">
                        <Button icon={<TelegramIcon />} />
                        <Button icon={<XIcon />} />
                        <Button icon={<EagleFaceIcon />} />
                        <Button icon={<LizardHeadIcon />} />
                        <Button icon={<SwooshIcon />} />
                        <Button title={'Sign-up'} />
                    </div>
                    <Button onClick={burgerOpen} className="header-button" icon={<BurgerIcon />}></Button>
                </div>
            </div>

            <HeaderBurger isOpen={isOpen} onClose={()=>setIsOpen(false)} />
        </header>
    );
}
