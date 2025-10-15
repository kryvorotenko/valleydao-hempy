import ProductSlider from '@/componens/product/ProductSlider';
import Button from '@/componens/ui/Button';
import ProductPriceLabelBg from '@/icon/ProductPriceLabelBg';
import DescriptionIconOne from '@/icon/product-description/DescriptionIconOne';
import Image from 'next/image';
import Link from 'next/link';
import ProductDescriptionItem from "@/componens/product/ProductDescriptionItem";
import DescriptionIconTwo from "@/icon/product-description/DescriptionIconTwo";
import DescriptionIconThree from "@/icon/product-description/DescriptionIconThree";
import DescriptionIconFour from "@/icon/product-description/DescriptionIconFour";
import DescriptionIconFive from "@/icon/product-description/DescriptionIconFive";
import ProductPriceLabelMobileBg from "@/icon/ProductPriceLabelMobileBg";

export default function Product() {
    return (
        <section className="product">
            <Image className="product-img" src="/img/product-bg.png" alt="banner" fill priority />
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
                                <label className="product-price-size-item">
                                    <input name="size" value={1} type="radio" />S
                                </label>
                                <label className="product-price-size-item">
                                    <input name="size" value={2} type="radio" />M
                                </label>
                                <label className="product-price-size-item">
                                    <input name="size" value={3} type="radio" />L
                                </label>
                                <label className="product-price-size-item">
                                    <input name="size" value={4} type="radio" />
                                    XL
                                </label>
                            </div>
                        </div>
                        <Link href="#" className="product-price-link">
                            Sizing chart
                        </Link>
                        <p className="product-price-order">
                            Pre-order:
                            <span>$109</span>
                            <span className="product-price-order-label">Free shipping</span>
                        </p>
                        <span className="product-price-regular">regular price: $129</span>
                        <Button className="product-price-button" title="Pre-order now" />
                        <ProductPriceLabelBg />
                        <ProductPriceLabelMobileBg/>
                    </div>
                </div>
                <div className="product-descriptions-wrapper">
                <div className="product-descriptions">
                   <ProductDescriptionItem icon={ <DescriptionIconOne />} title='Durability'/>
                   <ProductDescriptionItem icon={ <DescriptionIconTwo />} title='Breathability'/>
                   <ProductDescriptionItem icon={ <DescriptionIconThree />} title='Plastic'/>
                   <ProductDescriptionItem icon={ <DescriptionIconFour />} title='$HEMPY with purchase'/>
                   <ProductDescriptionItem icon={ <DescriptionIconFive />} title='Pesticide-free'/>
                </div>
                </div>
            </div>
        </section>
    );
}
