import Button from '@/componens/ui/Button';
import ArrowSliderIcon from '@/icon/ArrowSliderIcon';
import React from 'react';
import 'swiper/css/pagination';

interface PropsType {
    prevRef?: React.RefObject<HTMLButtonElement | null>;
    nextRef?: React.RefObject<HTMLButtonElement | null>;
    paginationRef?: React.RefObject<HTMLDivElement | null>;
    className?: string;
}

export default function ProductSliderControls({ prevRef, nextRef, paginationRef }: PropsType) {
    return (
        <div className="product-slider-controls">
            {prevRef && (
                <Button
                    ref={prevRef}
                    icon={<ArrowSliderIcon side={'prev'} />}
                    className="product-slider-controls-arrow prev"
                />
            )}

            {paginationRef && <div ref={paginationRef} className="product-slider-controls-pagination"></div>}

            {nextRef && (
                <Button
                    ref={nextRef}
                    icon={<ArrowSliderIcon side={'next'} />}
                    className="product-slider-controls-arrow next"
                />
            )}
        </div>
    );
}
