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
                        Pre-order today and receive $50 in $HEMPY tokens
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Pre-order today and receive $50 in $HEMPY tokens
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Pre-order today and receive $50 in $HEMPY tokens
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Pre-order today and receive $50 in $HEMPY tokens
                        <Image src={'/img/clever-leaf.png'} alt={'clever leaf'} width={24} height={24} />
                    </span>
                    <span>
                        Pre-order today and receive $50 in $HEMPY tokens
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
                                    <Link href="/#product">Shop</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#about">About HEMPY</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#story">Roadmap</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="https://hempy.science">Hempy Token</Link>
                                </li>
                                <li className="header-nav-item">
                                    <Link href="/#faq">FAQ</Link>
                                </li>
                                {/*<li className="header-nav-item">*/}
                                {/*    <Link href="/#">Litepaper</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </nav>
                    </div>
                    <div className="header-socials">
                        <Button icon={<TelegramIcon />}  href={'https://t.me/hempycommunity '}/>
                        <Button icon={<XIcon />} href={'https://x.com/hempydotscience'}/>
                        <Button icon={<EagleFaceIcon />} href={'https://dexscreener.com/base/0x41c4d3ec8f7c4a6a3fb43f4c18f8b7296fab4bcd'} />
                        {/*<Button icon={<LizardHeadIcon />} />*/}
                        {/*<Button icon={<SwooshIcon />} />*/}
                        <Button title={'Pre-Order'} href={'#product'}/>
                    </div>
                    <Button onClick={burgerOpen} className="header-button" icon={<BurgerIcon />}></Button>
                </div>
            </div>

            <HeaderBurger isOpen={isOpen} onClose={()=>setIsOpen(false)} />
        </header>
    );
}
