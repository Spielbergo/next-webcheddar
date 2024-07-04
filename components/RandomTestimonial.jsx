import { useState, useEffect } from 'react';
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
            <img src={testimonial.image} alt={testimonial.company} />
            <p>{testimonial.text}</p>
            <a href={testimonial.url} target="_blank" rel="noopener noreferrer">
                {testimonial.name}, {testimonial.company}
            </a>
        </div>
    );
};

export default RandomTestimonial;
