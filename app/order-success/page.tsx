import Footer from '@/componens/ui/Footer';
import Header from '@/componens/ui/Header';
import Image from "next/image";
import Button from "@/componens/ui/Button";

export default function OrderSuccess() {
    return (
        <>
            <Header/>
            <main>
                <section className={'order-result'}>
                    <Image className="banner-img" src="/img/banner.png" alt="banner" fill priority/>
                    <div className="container">
                        <div className="order-result-content">
                            <h1 className="order-result-title">Order successful!</h1>
                            <p className="order-result-text">
                                We’ll contact you shortly.
                            </p>
                            <Button href={'/'} className='order-result-button' title={'Go home'}/>
                            <Image
                                className="order-result-man"
                                src="/img/banner-man.png"
                                alt="banner"
                                width={856}
                                height={1148}
                            />
                            <Image
                                className="order-result-man-mobile"
                                src="/img/banner-man-mobile.png"
                                alt="banner"
                                width={312}
                                height={418}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
