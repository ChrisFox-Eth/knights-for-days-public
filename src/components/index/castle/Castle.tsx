import React from 'react';
import { Image } from '~/components/shared/Image';
import { Link } from '~/components/shared/Link';
import castle from '~/assets/images/TheKEEP.png';
import knight01 from '~/assets/images/knights/knight-01.png';
import knight02 from '~/assets/images/knights/knight-02.png';
import knight03 from '~/assets/images/knights/knight-03.png';
import knight04 from '~/assets/images/knights/knight-04.png';
import knight05 from '~/assets/images/knights/knight-05.png';
import knight06 from '~/assets/images/knights/knight-06.png';
import soss from '~/assets/images/TheSOSS.png';
import orv from '~/assets/images/TheORV.png';
import brin from '~/assets/images/TheBRINN.png';
import alm from '~/assets/images/TheALM.png';

export const Castle = () => {
  return (
    <div id='castle' className='bg-castle text-white'>
    <div className='grid md:grid-cols-3 content-center max-w-4xl mx-auto text-white pt-16 pb-24'>
      <div className='md:col-span-6 p-4'>
      <Image
        className='imgfix keep align-center mx-auto overflow-hidden mb-8'
        src={castle}
        alt='The keep.'
        placeholder='blur'
      />
        <h2 className='text-4xl mb-3 pt-8 font-bold'>Four Factions</h2>
        <p className='mb-4 text-lg'>
“In full armor they came from dirt and sky, from sea and beast. To make merry or war, none were sure.” - Surgeon Sneed, 1st Historian of Bigguy Village.</p>
<p className='mb-4 text-lg'>
The tranquility of Metania was finally disturbed when the Knights came. Some appeared in portals hovering in the air, others erupted from the ground or waterways, while some defied  nature itself by bursting from the bellies of forest beasts. They came into the world in full armor,  equipped with weapons and artifacts both terrible and ponderous.
</p>
<p className='mb-4 text-lg'>
The Knights gathered into four factions based on their origin: those who had come from  the earth found fellowship with those who had done the same, etc.
</p>
<table className='w-full mb-8 mt-16'>
  <thead>
    <tr className='text-lg'>
      <th className='text-2xl text-center'>SOSS</th>
      <th className='text-2xl text-center'>ORV</th>
    </tr>
  </thead>
  <tbody>
    <tr className='text-lg'>
      <td className='text-left p-8'>
      <Image
        className='imgfix overflow-hidden faction mx-auto rounded-md mb-8'
        src={soss}
        alt='The castle.'
        placeholder='blur'
      />
      </td>
      <td className='text-left p-8'>
      <Image
        className='imgfix overflow-hidden faction mx-auto rounded-md mb-8'
        src={orv}
        alt='The castle.'
        placeholder='blur'
      />
      </td>
      </tr>
    <tr className='text-lg'>
      <td className='text-left px-4 py-2'>
      The Soss knights all came to Metania through portals hovering in the air. They are the only faction that believes they came to this world as opposed to being born from it. They project an imperial air and choose to gather in the mountains so as to be closer to the sky.</td>
      <td className='text-left px-4 py-2'>
      The Orv first saw Metania through a curtain of blood and viscera. Bursting forth from wolf, lion, boar, and bear, they seem to retain the ferocity of the creature they erupted from. The wildlife of Metania consider them kin and do not scurry at their approach. Orv Knights prefer caves and dark forests.</td>
    </tr>
  </tbody>
</table>
<table className='w-full'>
  <thead>
    <tr className='text-lg'>
      <th className='text-2xl text-center'>BRIN</th>
      <th className='text-2xl text-center'>ALM</th>
    </tr>
  </thead>
  <tbody>
    <tr className='text-lg'>
      <td className='text-left p-8'>
      <Image
        className='imgfix overflow-hidden faction mx-auto rounded-md mb-8'
        src={brin}
        alt='The castle.'
        placeholder='blur'
      />
      </td>
      <td className='text-left p-8'>
      <Image
        className='imgfix overflow-hidden faction mx-auto rounded-md mb-8'
        src={alm}
        alt='The castle.'
        placeholder='blur'
      />
      </td>
      </tr>
    <tr className='text-lg'>
      <td className='text-left px-4 py-2'>
      Brin Knights came from swamps, streams, rivers, and The Eglet Sea. There is a uniform malevolence to Brin Knights not present in the other factions. Brin Knights are more magically inclined than the other factions. Like The Soss Knights, Brin Knights feel apart from the rest of Metania. But where The Soss believe this world is not their own, Brin Knights believe Metania was built over theirs. They gather in the swamps. They are patient.
</td>
      <td className='text-left px-4 py-2'>
      Alm Knights came from the dirt and vegetation of Metania. The natural inhabitants of Metania consider them the most approachable of all the factions as well as the most agriculturally inclined. They choose to gather in villages and fields.</td>
    </tr>
  </tbody>
</table>
        </div>
        </div>
      </div>
  );
};


//
//<h3 className='mb-4 text-2xl font-bold'>Knight Pieces</h3>
//<p className='mb-2 text-lg'>
//  Morbi ornare malesuada commodo. Nam varius arcu quis fermentum eleifend:
//</p>
//<ul className='list-disc pl-8 text-lg mb-8'>
//  <li className='list-item mb-1'>Helm.</li>
//  <li className='list-item mb-1'>Armor.</li>
//  <li className='list-item mb-1'>Accessory/Weapon.</li>
//  <li className='list-item mb-1'>Creature.</li>
//  <li className='list-item mb-1'>Eyes.</li>
//  <li className='list-item mb-1'>Mouth.</li>
//  <li className='list-item mb-1'>Tabard.</li>
//</ul>
