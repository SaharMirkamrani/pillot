import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const HamburgerIcon = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} size={20} color="#818181" />
    </>
  );
};

export default HamburgerIcon;
