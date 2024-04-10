import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import { testimonials } from "../constants";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/testimonial-slider.module.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]  
  };

  return (
    <section className={styles.testimonial_slider__section}>
      <div className={styles.testimonials_slider__titles}>
          <h2 className="section_title_01">Testimonials</h2>
          <h3 className="section_title_02">Testimonials</h3>
          <p className="section_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero, esse voluptates, dolorem voluptate aliquam</p>
      </div>

      <Slider {...settings} className={`container ${styles.testimonial_slider__container}`}>
        {testimonials.map((testimonial, id) => (
          <div key={id} className={styles.testimonial_slider__card}>
          <p>{testimonial.text}<Link href={testimonial.url} target="_blank" rel="noopener nofollow noreferrer">...Read more</Link></p>
          <div className={styles.testimonial_slider__content}>        
              <div>                
                <p>{testimonial.name}</p>
                <p style={{color: 'var(--primary-orange)' }}>{testimonial.company}</p>
                <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
              </div>
              {testimonial.image && (
              <div>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={100}
              />
              </div>
            )}
          </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSlider;
