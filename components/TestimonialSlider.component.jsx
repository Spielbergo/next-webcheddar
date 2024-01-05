import Slider from "react-slick";
import Image from "next/image";

import { testimonials } from "../constants";

import styles from "../styles/testimonial-slider.module.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <section>
      <Slider {...settings} className={styles.testimonial_slider__container}>
        {testimonials.map((testimonial, id) => (
          <div key={id} className={styles.testimonial_slider__card}>
          <p>{testimonial.text}</p>    
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
