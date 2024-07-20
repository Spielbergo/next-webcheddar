import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { testimonials } from '../data/index';

import styles from './random-testimonial.module.css';

const RandomTestimonial = () => {
    const [testimonial, setTestimonial] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * testimonials.length);
        setTestimonial(testimonials[randomIndex]);
    }, []);

    if (!testimonial) return null; 

    return (
        <div className={`${styles.random_testimonial}`}>
            <div className={styles.random_testimonial_img__container}>
                <Image 
                    src={testimonial.image} 
                    alt={`${testimonial.company} logo`} 
                    aria-label={`${testimonial.company} logo`} 
                    width={250}
                    height={100}
                />
            </div>
            <blockquote className={styles.random_testimonial_quote}>{testimonial.text}</blockquote>
            <Link href={testimonial.url} target="_blank" rel="noopener noreferrer">
                {testimonial.name}, {testimonial.company}
            </Link>
        </div>
    );
};

export default RandomTestimonial;
