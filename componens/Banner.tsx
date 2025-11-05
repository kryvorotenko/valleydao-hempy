'use client';

import Lotti1 from '@/animations/Line 1.json';
import Lotti2 from '@/animations/Line 2.json';
import Lotti3 from '@/animations/Line 3.json';
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
import Lottie from 'lottie-react';
import Image from 'next/image';

export default function Banner() {
    return (
        <section className="banner" id={'#banner'}>
            <h1 className="banner-title container">The most planet friendly hoodie you’ll ever wear </h1>
            <div className="banner-man-wrapper">
                <BannerOrder />
                <video className="banner-man-video" autoPlay loop muted playsInline width="856" height="1148">
                    <source src="/video/banner-man.webm" type="video/webm" />
                    <source src="/video/banner-man.mp4" type="video/mp4" />
                    Your browser does not support videos.
                </video>
                <video className="banner-man-video-mobile" autoPlay loop muted playsInline width="500" height="418">
                    <source src="/video/banner-man-mobile.webm" type="video/mp4" />
                    <source src="/video/banner-man-mobile.mp4" type="video/mp4" />
                    Your browser does not support videos.
                </video>
                <div className="banner-labels">
                    <BannerLabel text="0% microplastics" icon={<BannerLabelMicroplastics />} color={'yellow'} />
                    <BannerLabel
                        text="Highly breathable"
                        icon={<BannerLabelHighlyIcon />}
                        color={'orange'}
                        reverse={true}
                    />
                    <BannerLabel text="Wear it for life" icon={<BannerLabelWearIcon />} color={'blue'} />
                    <BannerLabel text="HempKnit™ Technology" icon={<BannerLabelTechnologyIcon />} color={'lemon'} />
                </div>
                <div className="banner-lottie">
                    <Lottie className="banner-lottie-item one" animationData={Lotti1} />
                    <Lottie className="banner-lottie-item two" animationData={Lotti2} />
                    <Lottie className="banner-lottie-item three" animationData={Lotti3} />
                    <Lottie className="banner-lottie-item four" animationData={Lotti2} />
                </div>
                <span className="banner-circle">
                    <BannerCircleIcon />
                </span>
            </div>
            <p className="banner-offer">
                <span>limited</span>
                <span>Edition</span>
                <span className="banner-offer-leaf">
                    Bio Engineered Drip
                    <LeafOneIcon />
                    <LeafTwoIcon />
                    <LeafThreeIcon />
                    <LeafFourIcon />
                    <LeafFiveIcon />
                </span>
            </p>
        </section>
    );
}
