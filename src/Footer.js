import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
  return (
    <div className='bg-black text-center py-4'>
      <p className='text-white text-2xl sm:text-xl lg:text-3xl font-extrabold mb-2'>
         <span className="primary-color">Made by </span> 
          <TypeAnimation
            sequence={[" Susheel Sahu", 3000, "", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
      </p>
      <div className='flex justify-center'>
        <a href='https://instagram.com/rohitsahu_xo_' target='_blank' rel='noopener noreferrer' className='text-xl primary-color mx-4'>Instagram</a>
        <a href='https://linkedin.com/in/susheel-sahu' target='_blank' rel='noopener noreferrer' className='text-xl primary-color mx-4'>LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;
