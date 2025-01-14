import { useState } from 'react';

import Button from './Button.component';

import styles from './contact-form.module.css';
import buttonStyles from './button.module.css';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('../api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('There was a problem submitting the form');
      }

      // Clear the form after successful submission
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      setError(null);
      setSuccessMessage('Thank you for your message. We will get back to you shortly!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    // Contact Form
    <form onSubmit={handleSubmit} className={styles.contact_form__form}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
          value={formState.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
          value={formState.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows="4"
          required
          value={formState.message}
          onChange={handleChange}
        />
      </div>
      <Button className={buttonStyles.default__flat} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
