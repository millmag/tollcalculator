import React, { useState } from 'react';
import Calculator from './Calculator';
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