'use client';

import Lotti2 from '@/animations/Line 2.json';
import Lotti3 from '@/animations/Line 3.json';
import StoryCard from '@/componens/story/StoryCard';
import StoryProgressItem from '@/componens/story/StoryProgressItem';
import StoryApple1 from '@/icon/story/StoryApple1';
import StoryApple2 from '@/icon/story/StoryApple2';
import StoryApple3 from '@/icon/story/StoryApple3';
import StoryApple4 from '@/icon/story/StoryApple4';
import { useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const storyCards = [
    {
        img: '/img/story/story-card1.png',
        title: 'From Lab to Hoodie',
        color: 'green',
        text: (
            <>
                Not long ago, Hempy was just a lab experiment — a dream to replace wasteful fast fashion with something
                better. We asked: What if hemp, one of Earth’s most sustainable crops, could be made truly wearable —
                soft, breathable, and durable through science? <br />
                <br /> Today, that vision is real
            </>
        ),
    },
    {
        img: '/img/story/story-card2.png',
        title: 'Hempy',
        color: 'purple',
        text: 'The Limited Edition Hempy Hoodie is the first product made from biotech-softened hemp fibers — proof that fashion can be clean, comfortable, and built to last. This hoodie isn’t just organic. It’s engineered:',
        list: [
            '100% organic hemp',
            'Enzyme-softened by ValleyDAO + ACIB',
            'Durable and breathable for years',
            'No plastic, no greenwashing',
        ],
    },
    {
        img: '/img/story/story-card3.png',
        title: 'Your Reward',
        color: 'pink',
        text: (
            <>
                And to reward early supporters, we’re giving back: <span>$50 in $HEMPY </span>tokens when you purchase
                the hoodie!
            </>
        ),
    },
    {
        img: '/img/story/story-card4.png',
        title: 'Join the Rebellion',
        color: 'orange',
        text: (
            <>
                With the launch of <span>Hempy 2.0</span>, we’ve gone from an on-chain experiment to a tangible
                rebellion. This means one step closer to flipping H&M and reshaping fashion for good!
            </>
        ),
    },
];

const progressHeader = [
    { text: 'Hempy research crowdfunded onchain', color: 'purple', number: 1 },
    { text: 'Start of research project', color: 'green', number: 3 },
    { text: 'Demonstrating water-resistant hemp', color: 'orange', number: 5 },
    { text: 'Filing of patent', color: 'lime', number: 7 },
    { text: 'Flippening of H&M', color: 'red', number: 9 },
];

const progressFooter = [
    { text: 'Release of hempy litepaper', color: 'peach', number: 2 },
    { text: 'Demonstrating enzyme-softened hemp', color: 'purple', number: 4 },
    { text: 'Hempy limited hoodies drop', color: 'yellow', number: 6 },
    { text: 'Spinout of hempy startup', color: 'blue', number: 8 },
];

const appleIcons = [
    <StoryApple1 key="1" />,
    <StoryApple2 key="2" />,
    <StoryApple1 key="3" />,
    <StoryApple2 key="4" />,
    <StoryApple1 key="5" />,
    <StoryApple4 key="6" />,
    <StoryApple3 key="7" />,
    <StoryApple4 key="8" />,
    <StoryApple3 key="9" />,
];

export default function Story() {
    const ref = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    const [progress, setProgress] = useState(0);

    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const x = useTransform(() => (-(mouse.x - windowWidth / 2) / 100) * 5);
    const y = useTransform(() => (-(mouse.y - windowHeight / 2) / 100) * 5);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    useEffect(() => scrollYProgress.onChange((latest) => setProgress(latest)), [scrollYProgress]);

    const trackHeight = ref.current?.offsetHeight || 0;
    const titleOffset = Math.min(trackHeight * 1.3 * progress, trackHeight * 1.1);

    const cardAnimations = storyCards.map((_, index) => {
        const maxOffset = trackHeight / 4.5;
        const section = 1 / storyCards.length; // длина одной "зоны видимости" для карточки
        const start = section * index - 0.05; // начало диапазона
        const end = section * (index + 1); // конец диапазона

        // Проверяем, находится ли текущий прогресс в диапазоне карточки
        const localProgress = progress < start ? 0 : progress > end ? 1 : (progress - start) / section; // нормализуем в диапазон 0–1

        const offsetY = -Math.min((trackHeight / (4 + index)) * localProgress, maxOffset) + y.get();
        const offsetX = x.get();

        const maxRotate = 40;
        const rotate = (index % 2 === 0 ? 1 : -1) * (localProgress * maxRotate);

        return {
            offsetY,
            offsetX,
            rotate,
        };
    });

    const isMobile = windowWidth <= 768;

    return (
        <section className="story">
            <Image className="story-img" src="/img/story-bg.png" alt="banner" fill priority />
            <div className="container">
                <div className="story-content">
                    <div className="story-lottie">
                        <Lottie className="story-lottie-item one" animationData={Lotti2} />
                        <Lottie className="story-lottie-item two" animationData={Lotti3} />
                    </div>

                    <h1 className="story-title" style={isMobile ? {} : { transform: `translateY(${titleOffset}px)` }}>
                        Our story
                    </h1>

                    <div className="story-cards" ref={ref}>
                        {storyCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                style={
                                    isMobile
                                        ? {}
                                        : {
                                              y: cardAnimations[idx].offsetY,
                                              x: cardAnimations[idx].offsetX,
                                              rotate: cardAnimations[idx].rotate,
                                          }
                                }
                            >
                                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                {/*// @ts-expect-error*/}
                                <StoryCard {...card} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="story-progress-wrapper">
                    <div className="story-progress">
                        <div className="story-progress-header">
                            {progressHeader.map((item, idx) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                return <StoryProgressItem key={idx} {...item} />;
                            })}
                        </div>

                        <div className="story-progress-body">
                            <span className="story-progress-body-span yellow">
                                <span className="story-progress-body-span blue"></span>
                            </span>
                            {appleIcons}
                        </div>

                        <div className="story-progress-footer">
                            {progressFooter.map((item, idx) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                return <StoryProgressItem key={idx} {...item} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
