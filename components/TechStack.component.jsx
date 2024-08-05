import Image from 'next/image';

import styles from './tech-stack.module.css';

import { techStack } from '../data';

 const TechStack = () => {
    return (
        <section className={styles.tech_stack__section}>
            <div className='flex flex_nowrap fade-right'>
                <div>
                    <h2 className="section_title_01 slide-right">How We Work</h2>
                    <h3 className="section_title_02 fade-left">Our Technology Stack</h3>
                    <p className="section_text fade-in delay-1">At Web Cheddar, we leverage a robust and versatile technology stack to deliver exceptional web solutions. Our expertise spans a variety of coding languages and platforms to ensure we meet all your digital needs.</p>

                    <h3 className='fade-in delay-1'>Advanced Frameworks and Platforms:</h3>

                    <ul className={styles.tech_stack__list}>
                        <li><span>React:</span> Building modern, high-performance user interfaces with a focus on component-based architecture.</li>
                        <li><span>NextJS:</span> Leveraging the power of server-side rendering and static site generation for fast, SEO-friendly websites.</li>
                        <li><span>WordPress:</span> Offering flexible and scalable content management solutions for a wide range of websites.</li>
                        <li><span>Shopify:</span> Providing robust and scalable e-commerce solutions, tailored to your online retail needs.</li>
                        <li><span>WooCommerce: </span>Integrating seamlessly with WordPress to deliver powerful and customizable e-commerce capabilities.</li>
                    </ul>
                </div>

                <div className='fade-left delay-1'>
                    <Image 
                        src="/home/tech-stack.webp"
                        className={`shadow fade-in`}
                        width={540}
                        height={327}
                        alt="Close up of people working in an office."
                        aria-label="Close up of people working in an office."
                    />
                </div>
            </div>

            <div className={styles.tech_stack__bottom_text}>
                <p className="section_text">By combining these technologies, we create websites and e-commerce platforms that are not only visually stunning but also highly functional and user-friendly. Trust us to use the best tools available to bring your vision to life.</p>
            </div>

            <ul className={styles.tech_stack__logo_container}>
                {techStack.map((tech) => 
                    <li key={tech.id}>
                        <p style={{color: tech.color}} title={tech.title}><tech.icon /></p>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default TechStack;