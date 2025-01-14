import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import styles from './color-toggle-button.module.css';

const ColorToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode) {
      root.removeAttribute('data-theme');
    } else if (prefersDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  };

  return (
    <button className={styles.color_toggle_button} onClick={toggleDarkMode}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ColorToggleButton;
