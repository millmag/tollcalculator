import React, { useState } from 'react';
import Calculator from './Calculator';
import Calculator1 from './Calculator1';
const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Calculator/>
      </>

    );
  }
  export default Home;