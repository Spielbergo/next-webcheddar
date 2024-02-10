import Image from 'next/image';
import aboutImage from '../../assets/images/why-choose-us.webp';
import Button from "../Button.component";

import styles from './why-choose-us.module.css';

const WhyChooseUs = () => {
    return (
        <section>
            <div className={styles.home_about__container}>
                <div>
                    <Image 
                        src={aboutImage}
                        className={`${styles.home_about__image} shadow`}
                        width={640}
                        height={427}
                        alt="Close up of people working in an office."/>
                </div>
                <div>
                    <h2 className="section_title_01">Why Choose Us</h2>
                    <h3 className="section_title_02">Transforming Your Ideas into Exceptional Digital Experiences</h3>
                    <p className="section_text">At Web Cheddar Web Solutions, we do things differently. First, we really listen to you. This way, we make sure your website matches your vision. Next, we use our years of experience to build something special, so you stand out online. Also, we believe in clear communication. You'll always know what's going on with your project. And lastly, our support doesn’t end once your site is live. We're here to help, making sure your website keeps running smoothly. </p>
                    <Button 
                        variant="default__home" 
                        onClick={() => router.push('/services')}>
                        Our Services
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;