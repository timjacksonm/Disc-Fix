import { useState, useEffect } from 'react';
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa';

const ToggleSchemeBtn = () => {
  const storedTheme = localStorage.getItem('dark-theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = storedTheme === 'true' || prefersDarkScheme.matches;

  const [toggleDarkMode, setToggleDarkMode] = useState(currentTheme);

  const clickHandler = () => setToggleDarkMode(!toggleDarkMode);

  useEffect(() => {
    const element = document.querySelector('body');
    if (element !== null) {
      if (toggleDarkMode) {
        element.className = 'dark-theme';
      } else {
        element.className = '';
      }
    }
    localStorage.setItem('dark-theme', toggleDarkMode.toString());
  }, [toggleDarkMode]);

  return (
    <button onClick={clickHandler}>
      {toggleDarkMode ? (
        <FaCloudSun size="2.5rem" />
      ) : (
        <FaCloudMoon size="2.5rem" />
      )}
    </button>
  );
};

export default ToggleSchemeBtn;
