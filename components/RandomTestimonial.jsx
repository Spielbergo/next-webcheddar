import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <div className={styles.testimonial}>
            <div className={styles.testimonial_img__container}>
                <img src={testimonial.image} alt={`${testimonial.company} logo`} aria-label={`${testimonial.company} logo`} />
            </div>
            <q>{testimonial.text}</q>
            <Link href={testimonial.url} target="_blank" rel="noopener noreferrer">
                {testimonial.name}, {testimonial.company}
            </Link>
        </div>
    );
};

export default RandomTestimonial;
