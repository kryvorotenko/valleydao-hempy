import Button from "@/componens/ui/Button";
import TelegramIcon from "@/icon/TelegramIcon";
import XIcon from "@/icon/XIcon";
import EagleFaceIcon from "@/icon/EagleFaceIcon";
import LizardHeadIcon from "@/icon/LizardHeadIcon";
import SwooshIcon from "@/icon/SwooshIcon";
import React from "react";
import Image from "next/image";

interface PropsType {
    isOpen: boolean;
}

export default function HeaderBurger({ isOpen }: PropsType) {
    return <div className={`header-burger ${isOpen ? 'opened' : ''}`}>
        <div className="container">
            <Image className="header-burger-img" src="/img/banner-mobile.png" alt="header burger" width={390} height={810} />
            <div className="header-burger-nav">
                <ul className='header-burger-nav-list'>
                    <li className='header-burger-nav-item'><a href="#">About HEMPY</a></li>
                    <li className='header-burger-nav-item'><a href="#">Roadmap</a></li>
                    <li className='header-burger-nav-item'><a href="#">Hempynomics</a></li>
                    <li className='header-burger-nav-item'><a href="#">About HEMPY</a></li>
                    <li className='header-burger-nav-item'><a href="#">FAQ</a></li>
                    <li className='header-burger-nav-item'><a href="#">Litepaper</a></li>
                    <li className='header-burger-nav-item'><a href="#">Litepaper</a></li>
                </ul>
            </div>
            <div className="header-burger-socials">
                <Button icon={<TelegramIcon/>}/>
                <Button icon={<XIcon/>}/>
                <Button icon={<EagleFaceIcon/>}/>
                <Button icon={<LizardHeadIcon/>}/>
                <Button icon={<SwooshIcon/>}/>
                <Button title={'Sign-up'}/>
            </div>
            <p className='header-burger-copyright'>Powered by ValleyDAO</p>
        </div>
    </div>;
}
