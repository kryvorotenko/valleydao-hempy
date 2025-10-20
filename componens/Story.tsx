'use client'
import StoryCard from '@/componens/story/StoryCard';
import StoryProgressItem from '@/componens/story/StoryProgressItem';
import StoryApple1 from '@/icon/story/StoryApple1';
import StoryApple2 from '@/icon/story/StoryApple2';
import StoryApple3 from '@/icon/story/StoryApple3';
import StoryApple4 from '@/icon/story/StoryApple4';
import Image from 'next/image';
import Lottie from "lottie-react";
import Lotti2 from "@/animations/Line 2.json";
import Lotti3 from "@/animations/Line 3.json";

export default function Story() {
    return (
        <section className="story">
            <Image className="story-img" src="/img/story-bg.png" alt="banner" fill priority />
            <div className="container">
                <div className="story-content">
                    <div className="story-lottie">
                        <Lottie className='story-lottie-item one' animationData={Lotti2}/>
                        <Lottie className='story-lottie-item two' animationData={Lotti3}/>
                    </div>
                    <h1 className="story-title">Our story</h1>
                    <div className="story-cards">
                        <StoryCard
                            img={'/img/story/story-card1.png'}
                            title="From Lab to Hoodie"
                            position={'left'}
                            color={'green'}
                            text={
                                <>
                                    Not long ago, Hempy was just a lab experiment — a dream to replace wasteful fast
                                    fashion with something better. We asked: What if hemp, one of Earth’s most
                                    sustainable crops, could be made truly wearable — soft, breathable, and durable
                                    through science? <br/>
                                    <br/> Today, that vision is real
                                </>
                            }
                        />
                        <StoryCard
                            img={'/img/story/story-card2.png'}
                            title={'Hempy'}
                            position={'right'}
                            color={'purple'}
                            text={
                                'The Limited Edition Hempy Hoodie is the first product made from biotech-softened hemp fibers — proof that fashion can be clean, comfortable, and built to last. This hoodie isn’t just organic. It’s engineered:'
                            }
                            list={[
                                '100% organic hemp',
                                'Enzyme-softened by ValleyDAO + ACIB',
                                'Durable and breathable for years',
                                'No plastic, no greenwashing',
                            ]}
                        />
                        <StoryCard
                            img={'/img/story/story-card3.png'}
                            title={'Your Reward'}
                            position={'left'}
                            color={'pink'}
                            text={
                                <>
                                    And to reward early supporters, we’re giving back: <span>$50 in $HEMPY </span>tokens
                                    when you purchase the hoodie!
                                </>
                            }
                        />
                        <StoryCard
                            img={'/img/story/story-card4.png'}
                            title={'Join the Rebellion'}
                            position={'right'}
                            color={'orange'}
                            text={
                                <>
                                    With the launch of <span>Hempy 2.0</span>, we’ve gone from an on-chain experiment to
                                    a tangible rebellion. This means one step closer to flipping H&M and reshaping
                                    fashion for good!
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="story-progress-wrapper">
                    <div className="story-progress">
                        <div className="story-progress-header">
                            <StoryProgressItem
                                text={'Hempy research crowdfunded onchain'}
                                color={'purple'}
                                number={1}
                            />
                            <StoryProgressItem text={'Start of research project'} color={'green'} number={3} />
                            <StoryProgressItem
                                text={'Demonstrating water-resistant hemp'}
                                color={'orange'}
                                number={5}
                            />
                            <StoryProgressItem text={'Filing of patent'} color={'lime'} number={7} />
                            <StoryProgressItem text={'Flippening of H&M'} color={'red'} number={9} />
                        </div>
                        <div className="story-progress-body">
                            <span className="story-progress-body-span yellow">
                                <span className="story-progress-body-span blue"></span>
                            </span>
                            <StoryApple1 />
                            <StoryApple2 />
                            <StoryApple1 />
                            <StoryApple2 />
                            <StoryApple1 />
                            <StoryApple4 />
                            <StoryApple3 />
                            <StoryApple4 />
                            <StoryApple3 />
                        </div>
                        <div className="story-progress-footer">
                            <StoryProgressItem text={'Release of hempy litepaper'} color={'peach'} number={2} />
                            <StoryProgressItem
                                text={'Demonstrating enzyme-softened hemp'}
                                color={'purple'}
                                number={4}
                            />
                            <StoryProgressItem text={'Hempy limited hoodies drop'} color={'yellow'} number={6} />
                            <StoryProgressItem text={'Spinout of hempy startup'} color={'blue'} number={8} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
