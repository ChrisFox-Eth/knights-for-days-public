import React from 'react';
import { Image } from '~/components/shared/Image';
import logo from '~/assets/images/logo-k4d.png';
import knight01 from '~/assets/images/knights/knight-01.png';
import knight02 from '~/assets/images/knights/knight-02.png';
import knight03 from '~/assets/images/knights/knight-03.png';
import knight04 from '~/assets/images/knights/knight-04.png';
import knight05 from '~/assets/images/knights/knight-05.png';
import knight06 from '~/assets/images/knights/knight-06.png';

export const Hero = () => {
  return (
    <>
      <div className='py-12 md:py-24 bg-hero bg-opacity-70 overflow-hidden text-white w-full'>
        <Image
          className='max-w-lg mx-auto mb-4 p-4'
          src={logo}
          alt='Knights for Days Logo'
          placeholder='blur'
        />
        <div className='text-center justify-center items-center max-w-4xl mx-auto px-4'>
          <h1 className='text-4xl mb-2 font-bold'>
            A medieval kNFT Project - coming soon to Ethereum
          </h1>
        </div>
        <div className='w-screen my-12 overflow-hidden'>
          <div className='flex flex-row items-center justify-center overflow-hidden'>
            <Image
              className='ratvatar imgfix overflow-hidden rounded-full mx-8'
              src={knight01}
              alt=''
            />
            <Image
              className='ratvatar imgfix overflow-hidden rounded-full mx-8'
              src={knight02}
              alt=''
            />
            <Image
              className='ratvatar imgfix overflow-hidden rounded-full mx-8'
              src={knight03}
              alt=''
            />
            <Image
              className='ratvatar imgfix overflow-hidden rounded-full mx-8'
              src={knight04}
              alt=''
            />
            <Image
              className='ratvatar imgfix overflow-hidden rounded-full mx-8'
              src={knight05}
              alt=''
            />
            <Image
              className='ratvatar imgfix overflow-hidden rounded-full mx-8'
              src={knight06}
              alt=''
            />
          </div>
        </div>
        <div className='text-center justify-center items-center max-w-2xl mx-auto px-4'>
          <p className='text-lg mb-8'>
          Praesent volutpat augue ac sapien rutrum vestibulum. Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit. Sed vel sagittis justo. Morbi ornare malesuada commodo. Nam varius arcu quis fermentum eleifend.
          </p>
        </div>
      </div>
    </>
  );
};
