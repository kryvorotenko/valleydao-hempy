'use client'
import FaqItem from '@/componens/faq/FaqItem';
import Image from 'next/image';
import Lottie from "lottie-react";
import Lotti2 from "@/animations/Line 2.json";
import Lotti3 from "@/animations/Line 3.json";
import FaqCloudIcon from "@/icon/faq/FaqCloudIcon";

export default function Faq() {
    return (
        <section className="faq">
            <Image className="choose-img" src="/img/choose-bg.png" alt="banner" fill priority />
            <div className="container">
                <div className="faq-content">
                    <h2 className="faq-title">FAQ</h2>
                    <FaqItem
                        title={'When can I expect this to be delivered?'}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <FaqItem
                        title={'What’s the HEMPY token?'}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <FaqItem
                        title={'What’s this hoodie made out of'}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <FaqItem
                        title={'What are the shipping costs?'}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <FaqItem
                        title={'What size will best fit me?'}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <FaqItem
                        title={"Where and what's this hoodie made out of?"}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <FaqItem
                        title={'What are enzymes?'}
                        text={
                            'Delivery usually takes 5–7 business days, depending on your location. Once your order is shipped, you’ll receive a tracking number so you can follow it in real time.'
                        }
                    />
                    <Image
                        className={'faq-jacket left'}
                        src={'/img/faq/faq-jacket1.png'}
                        alt="jacet"
                        width={360}
                        height={408}
                    />
                    <Image
                        className={'faq-jacket right'}
                        src={'/img/faq/faq-jacket2.png'}
                        alt="jacet"
                        width={360}
                        height={408}
                    />
                    <FaqCloudIcon/>
                    <div className="faq-lottie">
                        <Lottie className='faq-lottie-item two' animationData={Lotti3}/>
                        <Lottie className='faq-lottie-item one' animationData={Lotti2}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
