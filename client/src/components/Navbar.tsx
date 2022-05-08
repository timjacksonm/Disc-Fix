import React from 'react';
import ToggleSchemeBtn from './ToggleSchemeBtn';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <ToggleSchemeBtn />
    </div>
  );
};

export default Navbar;
