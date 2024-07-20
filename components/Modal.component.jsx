import { useEffect } from 'react';
import styles from './modal.module.css';
import { useModal } from '../contexts/ModalContext';

const Modal = ({ modalName, children }) => {
  const { modals, closeModal } = useModal();

  useEffect(() => {
    if (modals[modalName]) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modals, modalName]);

  if (!modals[modalName]) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => closeModal(modalName)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={() => closeModal(modalName)}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
