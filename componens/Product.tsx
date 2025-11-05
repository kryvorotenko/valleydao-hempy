'use client';

import OrderPopup from "@/componens/OrderPopup";
import SizingPopup from '@/componens/SizingPopup';
import ProductDescriptionItem from '@/componens/product/ProductDescriptionItem';
import ProductSlider from '@/componens/product/ProductSlider';
import Button from '@/componens/ui/Button';
import ProductPriceLabelBg from '@/icon/ProductPriceLabelBg';
import ProductPriceLabelMobileBg from '@/icon/ProductPriceLabelMobileBg';
import DescriptionIconFive from '@/icon/product-description/DescriptionIconFive';
import DescriptionIconFour from '@/icon/product-description/DescriptionIconFour';
import DescriptionIconOne from '@/icon/product-description/DescriptionIconOne';
import DescriptionIconThree from '@/icon/product-description/DescriptionIconThree';
import DescriptionIconTwo from '@/icon/product-description/DescriptionIconTwo';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Product() {
    const [loading, setLoading] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isSizePopupOpen, setSizePopupOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const sizes = ['s', 'm', 'l', 'xl'];
    // const onPurchase = async () => {
    //     if (!selectedSize) return;
    //     setLoading(true);
    //     const res = await fetch('/api/create-checkout-session', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ size: selectedSize }),
    //     });
    //
    //     const data = await res.json();
    //     window.location.href = data.url;
    // };

    useEffect(() => {
        if (isSizePopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isSizePopupOpen]);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isPopupOpen]);

    return (
        <section className="product" id="product">
            <div className="container">
                <div className="product-content">
                    <ProductSlider />
                    <div className="product-price">
                        <h3 className="product-price-title">Hemp Hoodie</h3>
                        <p className="product-price-text">
                            <span>Only 100 available</span> — One color, one design
                        </p>
                        <div className="product-price-color">
                            <span className="product-price-color-text">Color</span>
                            <span className="product-price-color-circle"></span>
                        </div>
                        <div className="product-price-size">
                            <span className="product-price-size-text">Size (Unisex)</span>
                            <div className="product-price-size-row">
                                {sizes.map((size) => (
                                    <label key={`product-sizes-${size}`} className="product-price-size-item">
                                        <input
                                            name="size"
                                            type="radio"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={() => setSelectedSize(size)}
                                        />
                                        {size.toUpperCase()}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setSizePopupOpen(true)} type={'button'} className="product-price-link">
                            Sizing chart
                        </button>
                        <p className="product-price-order">
                            Pre-order:
                            <span>$109</span>
                            <span className="product-price-order-label">Free shipping</span>
                        </p>
                        <span className="product-price-regular">regular price: $129</span>
                        <Button
                            className="product-price-button"
                            disabled={!selectedSize}
                            title={loading ? 'Loading...' : 'Pre-order now'}
                            // onClick={onPurchase}
                            onClick={() => setPopupOpen(true)}
                        />
                        <ProductPriceLabelBg />
                        <ProductPriceLabelMobileBg />
                    </div>
                </div>
                <div className="product-descriptions-wrapper">
                    <div className="product-descriptions">
                        <ProductDescriptionItem icon={<DescriptionIconOne />} title="Durability" />
                        <ProductDescriptionItem icon={<DescriptionIconTwo />} title="Breathability" />
                        <ProductDescriptionItem icon={<DescriptionIconThree />} title="Plastic" />
                        <ProductDescriptionItem icon={<DescriptionIconFour />} title="$HEMPY with purchase" />
                        <ProductDescriptionItem icon={<DescriptionIconFive />} title="Pesticide-free" />
                    </div>
                </div>
            </div>
            {isPopupOpen && selectedSize && <OrderPopup size={selectedSize} onClick={() => setPopupOpen(false)} />}
            {isSizePopupOpen && <SizingPopup onClick={() => setSizePopupOpen(false)} />}
        </section>
    );
}
