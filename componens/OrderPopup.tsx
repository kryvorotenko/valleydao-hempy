import Button from '@/componens/ui/Button';
import CloseIcon from '@/icon/CloseIcon';
import Image from 'next/image';
import OrderPopupDetails from "@/componens/order-popup/OrderPopupDetails";

interface PropsType {
    onClick?: () => void;
}

export default function OrderPopup({ onClick }: PropsType) {
    return (
        <div className="order-popup">
            <div onClick={(e) => e.stopPropagation()} className="order-popup-content">
                <div className="order-popup-header">
                    <h3 className="order-popup-header-title">Pre-order now</h3>
                    <Button className="order-popup-header-button" icon={<CloseIcon />} onClick={onClick} />
                </div>
                <div className="order-popup-summary-wrapper">
                <div className="order-popup-summary">
                    <div className="order-popup-main">
                        <h4 className="order-popup-main-title">your Order summary</h4>
                        <div className="order-popup-main-context">
                            <Image src="/img/order/order-item.png" alt="order image" width={120} height={120} />
                            <div className="order-popup-main-description">
                                <h5 className="order-popup-main-description-title">Hemp Hoodie</h5>
                                <span className="order-popup-main-description-span">Size: L</span>
                                <span className="order-popup-main-description-span">Color: Dark Sapphire</span>
                                <p className='order-popup-main-description-price'>
                                    Pre-order: <span>$109</span> <span className='free'>Free shipping</span>
                                </p>
                            </div>
                        </div>
                        <OrderPopupDetails/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
