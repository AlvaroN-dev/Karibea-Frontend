import FooterAbout from "./FooterAbout";
import FooterShop from "./FooterShop";
import FooterCustomer from "./FooterCustomer";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

// CAMBIO 1: Eliminamos props innecesarios
// CAMBIO 2: Export function
export function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <FooterAbout />
                    <FooterShop />
                    <FooterCustomer />
                    <FooterNewsletter />
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}