import React from 'react';
import { Image } from '~/components/shared/Image';
import { Link } from '~/components/shared/Link';
import castle from '~/assets/images/castle.png';

export const Castle = () => {
  return (
    <div id='castle' className='bg-castle text-white'>
      <div className='flex flex-col mx-auto max-w-xl py-20 px-4'>
        <Image
          className='imgfix overflow-hidden rounded-md mb-8'
          src={castle}
          alt='The castle.'
          placeholder='blur'
        />
        <h2 className='text-4xl mb-3 font-bold'>The Castle</h2>
        <p className='mb-4 text-lg'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          Sed vel sagittis justo.
          Morbi ornare malesuada commodo. Nam varius arcu quis fermentum eleifend.
        </p>

        <h3 className='mb-4 text-2xl font-bold'>Knight Pieces</h3>
        <p className='mb-2 text-lg'>
          Morbi ornare malesuada commodo. Nam varius arcu quis fermentum eleifend:
        </p>
        <ul className='list-disc pl-8 text-lg mb-8'>
          <li className='list-item mb-1'>Background.</li>
          <li className='list-item mb-1'>Tabbard.</li>
          <li className='list-item mb-1'>Chest.</li>
          <li className='list-item mb-1'>Weapon.</li>
          <li className='list-item mb-1'>Demon.</li>
          <li className='list-item mb-1'>Eyes.</li>
          <li className='list-item mb-1'>Helmet.</li>
        </ul>

        <h3 className='mb-4 text-2xl font-bold'>Lore</h3>
        <p className='mb-2 text-lg'>
          Morbi ornare malesuada commodo. Nam varius arcu quis fermentum eleifend.
        </p>
      </div>
    </div>
  );
};
