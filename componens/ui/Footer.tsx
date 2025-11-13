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
                            <Button color={'yellow'} icon={<TelegramIcon />} href={'https://t.me/hempycommunity '}/>
                            <Button color={'yellow'} icon={<XIcon />} href={'https://x.com/hempydotscience'}/>
                            <Button color={'yellow'} icon={<EagleFaceIcon />} href={'https://dexscreener.com/base/0x41c4d3ec8f7c4a6a3fb43f4c18f8b7296fab4bcd'}/>
                            {/*<Button color={'yellow'} icon={<LizardHeadIcon />} />*/}
                            {/*<Button color={'yellow'} icon={<SwooshIcon />} />*/}
                            <Button color={'yellow'} title={'Pre-Order'} href={'#product'}/>
                        </div>
                        <div className="footer-row">
                            <a className="footer-row-logo" href="#">
                                <LogoIcon />
                            </a>
                            <nav className="footer-nav">
                                <ul className="footer-nav-column">
                                    <li className="footer-nav-item">
                                        <Link href="/#product">Shop</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="/#about">About HEMPY</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="/#story">Roadmap</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="https://hempy.science">Hempy Token</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="/#faq">FAQ</Link>
                                    </li>
                                    {/*<li className="footer-nav-item">*/}
                                    {/*    <Link href="#">Litepaper</Link>*/}
                                    {/*</li>*/}

                                </ul>
                                <ul className="footer-nav-column">
                                    <li className="footer-nav-item">
                                    <Link href=" https://www.hempy.science/token-disclaimer">Token Disclaimer</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="https://www.hempy.science/imprint">Imprint</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="https://drive.google.com/file/d/1umI8rvpfq2VsNnlqCOXXRgAhQpicKKd4/view">Hempy IPToken <br/> Membership AGREEMENT</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="/#faq">FAQ</Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link href="https://hempy.science/hoodie-terms">HOODIE TERMS & <br/> CONDITIONS</Link>
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
