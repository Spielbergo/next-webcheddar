import Link from 'next/link';
import Image from 'next/image';

import ContactForm from '../ContactForm';

import styles from '../../styles/home.module.css';

const ContactHome = () => {
  return (
      <section>
        <ContactForm />
      </section>
  );
}

export default ContactHome;
