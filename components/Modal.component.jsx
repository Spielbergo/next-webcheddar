import { useEffect } from 'react';
import Image from 'next/image';

import { useModal } from '../contexts/ModalContext';

import { IoMdCloseCircleOutline } from "react-icons/io";

import styles from './modal.module.css';

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
      <div className={styles.modal__container}>
        <div>
            <Image
            src='/contact-us.webp'
            className={styles.modal__container_image}
            alt="Get a Quote - Conact symbols on a dark blue bg"
            aria-label="Get a Quote - Conact symbols on a dark blue bg"
            width="370"
            height="520"
            />
        </div>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={() => closeModal(modalName)}><IoMdCloseCircleOutline /></button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
