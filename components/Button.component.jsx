import styles from './button.module.css';

const Button = ({ children, variant = 'default', onClick, ...props }) => {
  return (
    // BUtton Component
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
