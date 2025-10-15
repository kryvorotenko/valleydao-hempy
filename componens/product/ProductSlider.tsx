'use client';

import ProductSliderControls from '@/componens/product/ProductSliderControl';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

export default function ProductSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [viewingImage, setViewingImage] = useState<number | null>(null);
    const [popupSwiper, setPopupSwiper] = useState<SwiperClass | null>(null); // 👈 new ref state

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const prevPopupRef = useRef<HTMLButtonElement | null>(null);
    const nextPopupRef = useRef<HTMLButtonElement | null>(null);
    const paginationPopupRef = useRef<HTMLDivElement | null>(null);

    const catalog = [
        { slide: '/img/product/slide1.png' },
        { slide: '/img/product/slide2.png' },
        { slide: '/img/product/slide3.png' },
        { slide: '/img/product/slide4.png' },
        { slide: '/img/product/slide5.png' },
        { slide: '/img/product/slide6.png' },
    ];

    const catalogOfThumb = [
        { slide: '/img/product/slide-thumb1.png' },
        { slide: '/img/product/slide-thumb2.png' },
        { slide: '/img/product/slide-thumb3.png' },
        { slide: '/img/product/slide-thumb4.png' },
        { slide: '/img/product/slide-thumb5.png' },
        { slide: '/img/product/slide-thumb6.png' },
    ];

    useEffect(() => {
        if (popupSwiper && viewingImage !== null) {
            popupSwiper.slideTo(viewingImage, 0);
        }
    }, [viewingImage, popupSwiper]);

    return (
        <>
            <div className="product-slider-wrapper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    modules={[Navigation, Pagination, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="product-slider"
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{
                        el: paginationRef.current,
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        if (typeof swiper.params.navigation !== 'boolean') {
                            const nav = swiper.params.navigation;
                            if (nav) {
                                nav.prevEl = prevRef.current;
                                nav.nextEl = nextRef.current;
                            }
                        }
                        if (typeof swiper.params.pagination !== 'boolean') {
                            const pg = swiper.params.pagination;
                            if (pg) {
                                pg.el = paginationRef.current;
                            }
                        }
                    }}
                >
                    {catalog.map((item, i) => (
                        <SwiperSlide className="product-slider-card" key={i}>
                            <Image
                                onClick={() => setViewingImage(i)}
                                src={item.slide}
                                alt={'slide'}
                                className="product-slider-image"
                                width={503}
                                height={683}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ProductSliderControls prevRef={prevRef} nextRef={nextRef} paginationRef={paginationRef} />
            </div>

            <div className="product-thumbs">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={16}
                    modules={[Thumbs]}
                    className="product-thumbs-slider"
                    onSwiper={setThumbsSwiper}

                    breakpoints={{
                        320: {
                            slidesPerView: 2.2,
                            slidesOffsetBefore:24,
                            slidesOffsetAfter:24,
                        },
                        768: {
                            slidesPerView: 4.2,
                        },
                        1100: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {catalogOfThumb.map((item, i) => (
                        <SwiperSlide className="product-thumbs-card" key={i}>
                            <Image
                                src={item.slide}
                                alt={'slide'}
                                className="product-thumbs-image"
                                width={205}
                                height={206}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {viewingImage !== null && (
                <div
                    className="product-image-popup"
                    onClick={(e) => {
                        const target = e.target as HTMLElement;
                        const isImage = target.closest('.product-image-popup-slider-image');
                        const isButton = target.closest('.product-slider-controls-arrow');
                        const isPagination = target.closest('.swiper-pagination-bullet');

                        if (!isImage && !isButton && !isPagination) {
                            setViewingImage(null);
                        }
                    }}
                >
                    <div className="product-image-popup-inner">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={50}
                            modules={[Navigation, Pagination]}
                            className="product-image-popup-slider"
                            navigation={{
                                prevEl: prevPopupRef.current,
                                nextEl: nextPopupRef.current,
                            }}
                            pagination={{
                                el: paginationPopupRef.current,
                                clickable: true,
                            }}
                            onBeforeInit={(swiper) => {
                                if (typeof swiper.params.navigation !== 'boolean') {
                                    const nav = swiper.params.navigation;
                                    if (nav) {
                                        nav.prevEl = prevPopupRef.current;
                                        nav.nextEl = nextPopupRef.current;
                                    }
                                }
                                if (typeof swiper.params.pagination !== 'boolean') {
                                    const pg = swiper.params.pagination;
                                    if (pg) {
                                        pg.el = paginationPopupRef.current;
                                    }
                                }
                            }}
                            onSwiper={setPopupSwiper}
                        >
                            {catalog.map((item, i) => (
                                <SwiperSlide className="product-image-popup-slider-card" key={i}>
                                    <Image
                                        src={item.slide}
                                        alt={'slide'}
                                        className="product-image-popup-slider-image"
                                        width={503}
                                        height={683}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <ProductSliderControls
                            prevRef={prevPopupRef}
                            nextRef={nextPopupRef}
                            paginationRef={paginationPopupRef}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
