// components/Modal.component.js
import { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300); // Duration of the fadeOut animation
  };

  if (!show && !closing) return null;

  return (
    <div className={`${styles.modalOverlay} ${closing ? styles.fadeOut : ''}`} onClick={handleClose}>
      <div className={`${styles.modalContent} ${closing ? styles.slideOut : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
