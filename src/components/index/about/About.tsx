import React from 'react';
import { Image } from '~/components/shared/Image';
import knightsMintingSoon from '~/assets/images/minting-soon.png';

export const About = () => {
  return (
    <div className='bg-about overflow-hidden'>
      {/* <Image className="imgfix w-screen overflow-hidden" src={swooshGray} alt="" /> */}
      <div className='grid md:grid-cols-3 content-center max-w-4xl mx-auto text-white pt-16 pb-24'>
        <div className='md:col-span-2 p-4'>
          <h1 className='text-4xl font-bold'>Who are Ye?</h1>
          <p className='my-4 text-lg'>
            Praesent volutpat augue ac sapien rutrum vestibulum.
            Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
            Sed vel sagittis justo.
          </p>
          <p className='my-4 text-lg'>
            Praesent volutpat augue ac sapien rutrum vestibulum.
            Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
            Sed vel sagittis justo.
          </p>
          <p className='my-4 text-lg'>
            Praesent volutpat augue ac sapien rutrum vestibulum.
            Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
            Sed vel sagittis justo.
          </p>
        </div>
        <Image
          className='w-full h-full'
          src={knightsMintingSoon}
          alt='Knights Minting Soon'
          placeholder='blur'
        />
      </div>
    </div>
  );
};
