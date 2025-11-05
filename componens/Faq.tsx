'use client';

import Lotti2 from '@/animations/Line 2.json';
import Lotti3 from '@/animations/Line 3.json';
import FaqItem from '@/componens/faq/FaqItem';
import FaqCloudIcon from '@/icon/faq/FaqCloudIcon';
import Lottie from 'lottie-react';
import Image from 'next/image';

export default function Faq() {
    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="faq-content">
                    <h2 className="faq-title">FAQ</h2>
                    <FaqItem
                        title={'When can I expect this to be delivered?'}
                        text={
                            'We’re aiming to ship your hoodie in Q4 2025. It’s a complex process (biotech ain’t fast fashion), but we’ll keep you in the loop every step of the way. Thanks for your patience, it’s worth the wait!'
                        }
                    />
                    <FaqItem
                        title={'What’s the HEMPY token?'}
                        text={
                            '$HEMPY is the heartbeat of our project, a token that connects real biotech research with the people who support it. When you buy a hoodie, you get $50 in $HEMPY. as a reward. It’s our way of saying thanks for backing science! <br/><br/> <span>CA: 0xe18c07D858fB1bbF8c06fD78c13b86AfD3d04e28</span>'
                        }
                    />
                    <FaqItem
                        title={'Why is it 109$, what makes this hoodie special?'}
                        text={
                            'This isn’t your average hoodie, it’s made from 100% organic, biotech-softened hemp, it’s built to last, totally free of microplastics, and produced in small batches. Think of it as your forever hoodie, not something you toss after a season <br><br> Plus, you get $50 in $HEMPY tokens just for supporting sustainable science.'
                        }
                    />
                    <FaqItem
                        title={'What are the shipping costs?'}
                        text={'Zero. Nada. Nothing. Free shipping worldwide. We’ve got you, wherever you are.'}
                    />
                    <FaqItem
                        title={'What size will best fit me?'}
                        text={
                            'Our sizes are pretty standard, but to be safe, check out the size chart on the product page before ordering. Better to measure once than send it twice.'
                        }
                    />
                    <FaqItem
                        title={"Where and what's this hoodie made out of?"}
                        text={
                            'It’s made from 100% organic hemp, with zero microplastics, and proudly produced in Europe.'
                        }
                    />
                    <FaqItem
                        title={'What are enzymes?'}
                        text={
                            'Enzymes are like tiny biological machines that help break things down, in our case, they make hemp fibers softer and more wearable without using harsh chemicals. Basically, it’s nature-powered science doing cool stuff for your hoodie!'
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
                    <FaqCloudIcon />
                    <div className="faq-lottie">
                        <Lottie className="faq-lottie-item two" animationData={Lotti3} />
                        <Lottie className="faq-lottie-item one" animationData={Lotti2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
