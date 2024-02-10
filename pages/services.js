import Image from "next/image";

import ServicesPage from "../components/home/Services.module";
import TestimonialSlider from "../components/TestimonialSlider.component";

import contactImage from '../assets/images/hero/header.webp';

const Services = () => {
    return (
        <>
        <header className="page_header">
            <div className="page_header__text">
                <h1 className="page_header__h1">Services</h1>
            </div>
            <Image 
                src={contactImage}
                className="page_header__image"
                alt="Header image - code on a screen wth an orange overlay" 
                width="1920" 
                height="400"
                priority 
            />   
        </header>
        <section>            
            <ServicesPage />
            <TestimonialSlider />
        </section>
        </>
    )
}

export default Services;