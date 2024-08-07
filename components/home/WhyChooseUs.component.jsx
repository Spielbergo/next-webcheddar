import Image from 'next/image';
import Router from 'next/router';

import aboutImage from '../../public/home/why-choose-us.webp';
import Button from '../Button.component';

import styles from './why-choose-us.module.css';

const WhyChooseUs = () => {
    return (
        <section>
            <div className={styles.home_about__container}>
                <div>
                    <Image 
                        src={aboutImage}
                        className={`${styles.home_about__image} shadow fade-in`}
                        width={640}
                        height={427}
                        alt="Close up of people working in an office."
                        aria-label="Close up of people working in an office."
                    />
                </div>
                <div>
                    <h2 className="section_title_01 slide-right">Why Choose Us</h2>
                    <h3 className="section_title_02 fade-left">Transforming Your Ideas into Exceptional Digital Experiences</h3>
                    <p className="section_text fade-in delay-1">At Web Cheddar Web Solutions, we do things differently. We really listen to you. This way, we make sure your website matches your vision. We use our years of experience to build something special, so you stand out online. We believe in clear communication. You'll always know what's going on with your project. Our support doesn’t end once your site is live. We're here to help, making sure your website keeps running smoothly. </p>
                    <div className={styles.home_about__buttons}>
                        <div className='slide-up delay-2'>
                            <Button 
                                variant="default__home" 
                                onClick={() => Router.push('services')}>
                                Our Services
                            </Button>
                        </div>
                        <div  className='slide-up delay-3'>
                            <Button 
                                variant="outline" 
                                onClick={() => Router.push('#ourProjects')}>
                                Our Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;
