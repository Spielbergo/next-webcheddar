import Slider from "react-slick";
import Image from "next/image";

import { testimonials } from "../constants";

import styles from "../styles/home.module.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <section>
      <Slider {...settings} className={styles.testimonial_slider__container}>
        {testimonials.map((testimonial, id) => (
          <div key={id} className={styles.testimonial_slider__card}>
            {testimonial.image && (
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
              />
            )}
            <p>{testimonial.text}</p>
            <p>{testimonial.name}</p>
            <p>{testimonial.company}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSlider;
