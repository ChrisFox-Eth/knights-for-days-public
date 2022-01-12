import React from 'react';
import { Image } from '~/components/shared/Image';
import { Link } from '~/components/shared/Link';

export const Pricing = () => {
  return (
    <div id='pricing' className='bg-pricing text-white'>
      <div className='flex flex-col mx-auto max-w-xl py-20 px-4'>
        <h2 className='text-4xl mb-3 font-bold'>Pricing</h2>
        <p className='mb-8 text-lg'>
          Praesent volutpat augue ac sapien rutrum vestibulum.
          Sed efficitur nunc gravida mi sagittis, vel ultrices erat suscipit.
          Sed vel sagittis justo.
          Morbi ornare malesuada commodo. Nam varius arcu quis fermentum eleifend.
        </p>
        {/** @ts-ignore */}

        <h3 className='mb-4 text-2xl font-bold'>Minting</h3>
        <table className='w-full'>
          <thead>
            <tr className='text-lg border-black-300 border-solid'>
              <th className='text-left px-4 py-2 w-2/3'>Knight Knumber</th>
              <th className='text-left p-4 px-4 py-2'>Cost to Mint</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b text-lg border-black-300 border-solid'>
              <td className='text-left px-4 py-2'>0001 - 1,000</td>
              <td className='text-left px-4 py-2'>Free</td>
            </tr>
            <tr className='border-b text-lg border-black-300 border-solid'>
              <td className='text-left px-4 py-2'>1,001 - 5,000</td>
              <td className='text-left px-4 py-2'>Ξ0.005</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
