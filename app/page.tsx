import Banner from '@/componens/Banner';
import Choose from '@/componens/Choose';
import Faq from '@/componens/Faq';
import Product from '@/componens/Product';
import Story from '@/componens/Story';
import Footer from '@/componens/ui/Footer';
import Header from '@/componens/ui/Header';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Product />
                <Choose />
                <Story />
                <Faq />
            </main>
            <Footer />
        </>
    );
}
