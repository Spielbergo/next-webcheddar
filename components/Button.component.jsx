import styles from '../styles/button.module.css';

const Button = ({ children, variant = 'default', onClick, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
