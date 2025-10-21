'use client'
import BannerLabel from '@/componens/banner/BannerLabel';
import BannerOrder from '@/componens/banner/BannerOrder';
import BannerCircleIcon from '@/icon/BannerCircleIcon';
import BannerLabelHighlyIcon from '@/icon/banner-label/BannerLabelHighlyIcon';
import BannerLabelMicroplastics from '@/icon/banner-label/BannerLabelMicroplastics';
import BannerLabelTechnologyIcon from '@/icon/banner-label/BannerLabelTechnologyIcon';
import BannerLabelWearIcon from '@/icon/banner-label/BannerLabelWearIcon';
import LeafFiveIcon from '@/icon/banner-offer-leafs/LeafFiveIcon';
import LeafFourIcon from '@/icon/banner-offer-leafs/LeafFourIcon';
import LeafOneIcon from '@/icon/banner-offer-leafs/LeafOneIcon';
import LeafThreeIcon from '@/icon/banner-offer-leafs/LeafThreeIcon';
import LeafTwoIcon from '@/icon/banner-offer-leafs/LeafTwoIcon';
import Image from 'next/image';
import Lotti1 from '@/animations/Line 1.json'
import Lotti2 from '@/animations/Line 2.json'
import Lotti3 from '@/animations/Line 3.json'
import Lottie from "lottie-react";


export default function Banner() {
    return (
        <section className="banner" id={'#banner'}>
            <Image className="banner-img" src="/img/banner.png" alt="banner" fill priority />
            <h1 className="banner-title container">The most planet friendly hoodie you’ll ever wear </h1>
            <div className="banner-man-wrapper">
                <BannerOrder/>
                <Image className="banner-man" src="/img/banner-man.png" alt="banner" width={856} height={1148}/>
                <Image
                    className="banner-man-mobile"
                    src="/img/banner-man-mobile.png"
                    alt="banner"
                    width={312}
                    height={418}
                />
                <div className="banner-labels">
                    <BannerLabel text="0% microplastics" icon={<BannerLabelMicroplastics/>} color={'yellow'}/>
                    <BannerLabel
                        text="Highly breathable"
                        icon={<BannerLabelHighlyIcon/>}
                        color={'orange'}
                        reverse={true}
                    />
                    <BannerLabel text="Wear it for life" icon={<BannerLabelWearIcon/>} color={'blue'}/>
                    <BannerLabel text="HempKnit™ Technology" icon={<BannerLabelTechnologyIcon/>} color={'lemon'}/>
                </div>
                <div className="banner-lottie">
                    <Lottie className='banner-lottie-item one' animationData={Lotti1}/>
                    <Lottie className='banner-lottie-item two' animationData={Lotti2}/>
                    <Lottie className='banner-lottie-item three' animationData={Lotti3}/>
                    <Lottie className='banner-lottie-item four' animationData={Lotti2}/>
                </div>
                <span className="banner-circle">
                    <BannerCircleIcon/>
                </span>
            </div>
            <p className="banner-offer">
                <span>limited</span>
                <span>Edition</span>
                <span className="banner-offer-leaf">
                    Bio Engineered Drip
                    <LeafOneIcon/>
                    <LeafTwoIcon/>
                    <LeafThreeIcon />
                    <LeafFourIcon />
                    <LeafFiveIcon />
                </span>
            </p>
        </section>
    );
}
