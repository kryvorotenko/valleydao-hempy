import BannerOrderBaseIcon from '@/icon/BannerOrderBaseIcon';
import BannerOrderBg from '@/icon/BannerOrderBg';

export default function BannerOrder() {
    return (
        <div className="banner-order">
            <BannerOrderBg />

            <h2 className="banner-order-content">
                Order today and receive <br/>
                <span className="banner-order-content-title">50$ in $HEMPY</span><br/>
                tokens on<BannerOrderBaseIcon />
            </h2>
        </div>
    );
}
