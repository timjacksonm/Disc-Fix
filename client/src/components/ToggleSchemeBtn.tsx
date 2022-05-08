import React, { useState, useEffect } from 'react';
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa';

const ToggleSchemeBtn = () => {
  const storedTheme = localStorage.getItem('dark-theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = storedTheme === 'true' || prefersDarkScheme.matches;

  const [toggleDarkTheme, setToggleDarkTheme]: any =
    useState<boolean>(currentTheme);

  const clickHandler = () => setToggleDarkTheme(!toggleDarkTheme);

  useEffect(() => {
    const element = document.querySelector('body');
    if (element !== null) {
      if (toggleDarkTheme) {
        element.className = 'dark-theme';
      } else {
        element.className = '';
      }
    }
    localStorage.setItem('dark-theme', toggleDarkTheme);
  }, [toggleDarkTheme]);

  return (
    <button onClick={clickHandler}>
      {toggleDarkTheme ? (
        <FaCloudSun size="2.5rem" />
      ) : (
        <FaCloudMoon size="2.5rem" />
      )}
    </button>
  );
};

export default ToggleSchemeBtn;
