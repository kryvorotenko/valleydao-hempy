import Banner from '@/componens/Banner';
import Header from '@/componens/ui/Header';
import Product from "@/componens/Product";
import Choose from "@/componens/Choose";
import Story from "@/componens/Story";
import Faq from "@/componens/Faq";
import Footer from "@/componens/ui/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner/>
                <Product/>
                <Choose/>
                <Story/>
                <Faq/>
            </main>
            <Footer/>
        </>
    );
}
