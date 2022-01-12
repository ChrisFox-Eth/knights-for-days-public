import React from 'react';
import { Image } from '~/components/shared/Image';
import { Link } from '~/components/shared/Link';

export const Roadmap = () => {
  return (
    <div className='w-full bg-roadmap text-white'>
      <div className='flex flex-col max-w-xl px-4 mx-auto py-20'>
        <div className='text-lg'>
          <h2 className='mb-4 text-4xl font-bold'>Ye Olde Roadmap</h2>
          <p className='mb-8'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          </p>
          <h3 className='mb-4 text-2xl font-bold'>20% minted</h3>
          <p className='mb-8'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          </p>
          <h3 className='mb-4 text-2xl font-bold'>50% minted</h3>
          <p className='mb-2'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          </p>
          <p className='mb-8'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          </p>
          <h3 className='mb-4 text-2xl font-bold'>100% minted</h3>
          <p className='mb-8'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          </p>
          <h3 className='mb-4 text-2xl font-bold'>Beyond...</h3>
          <p className='mb-8'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};
