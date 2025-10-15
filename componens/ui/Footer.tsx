import Button from '@/componens/ui/Button';
import EagleFaceIcon from '@/icon/EagleFaceIcon';
import LizardHeadIcon from '@/icon/LizardHeadIcon';
import LogoIcon from '@/icon/LogoIcon';
import SwooshIcon from '@/icon/SwooshIcon';
import TelegramIcon from '@/icon/TelegramIcon';
import XIcon from '@/icon/XIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <Image className="footer-img" src="/img/footer-bg.png" alt="banner" width={1920} height={1080} />
            <Image className="footer-img-mobile" src="/img/footer-bg-mobile.png" alt="banner" width={360} height={1400} />
            <div className="container">
                <div className="footer-content">
                    <div className="footer-top">
                        <div className="footer-socials">
                            <Button color={'yellow'} icon={<TelegramIcon />} />
                            <Button color={'yellow'} icon={<XIcon />} />
                            <Button color={'yellow'} icon={<EagleFaceIcon />} />
                            <Button color={'yellow'} icon={<LizardHeadIcon />} />
                            <Button color={'yellow'} icon={<SwooshIcon />} />
                            <Button color={'yellow'} title={'Sign-up'} />
                        </div>
                        <div className="footer-row">
                            <a className="footer-row-logo" href="#">
                                <LogoIcon />
                            </a>
                            <nav className="footer-nav">
                                <ul className="footer-nav-column">
                                    <li className="footer-nav-item">
                                        <Link href="#">About HEMPY</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">Roadmap</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">Hempynomics</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">FAQ</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">Litepaper</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">Shop</Link>
                                    </li>
                                </ul>
                                <ul className="footer-nav-column">
                                    <li className="footer-nav-item">
                                        <Link href="#">Token Disclaimer</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">Imprint</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">Hempy IPToken <br/> Membership AGREEMENT</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">FAQ</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="#">HOODIE TERMS & <br/> CONDITIONS</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-copyright">Powered by ValleyDAO</div>
                </div>
            </div>
        </footer>
    );
}
