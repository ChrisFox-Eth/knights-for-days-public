import React from 'react';
import { Image } from '~/components/shared/Image';
import knightsMintingSoon from '~/assets/images/minting-soon.png';
import scroll from '~/assets/images/scroll.png';


export const About = () => {
  return (
    <div className='bg-about overflow-hidden'>
      {/* <Image className="imgfix w-screen overflow-hidden" src={swooshGray} alt="" /> */}
      <div className='grid md:grid-cols-3 content-center max-w-4xl mx-auto text-white pt-24'>
          <h1 className='text-4xl font-bold'>History</h1>
          <div className='md:col-span-12 p-4'>
          <p className='text-lg text-scroll'>
Built on the ruins of an older world, Metania is a land of wonder & shadow, of profound valor & terrifying absurdity. Into this realm, come the Knights. Emily Farringtooth moves through Innish Hall balancing plates of eggs & ale. Her regulars have all relocated to the hearth, no doubt believing its glow will protect them from the strangers in their midst. The strangers.
Colorful, yes, but silent too. Strange tabards & formidable armor. Curious pets & artifacts of formidable power. The Knights.
          </p>
          <p className='text-lg text-scroll'>
A mouse peeks from the helm of one of these visitors as she slides a dish of runny yolk before him. Emily is not afraid of these strangers. They have done nothing to abuse the hospitality of the Hall. But…but there is potential.
Her grandfather was given to prophecy when the apples of Siddick Glade were ripe & they had filled their last basket. Without fail the words would come to him before they set off for home. He would grab her wrist & tell her this world is fresh & that it would take strangers to make it old again. The other underfolk called him a lunatic.
          </p>
          <p className='text-lg text-scroll'>
These silent Knights have made Innish Hall their gathering place for six months now. In that time the gossip has gone from mundane to bizarre. Rumors of an entire ocean appearing at the edge of the frontier. Tales of a candle wax castle erupting from the barren swamps of Dohm. If she could see through their helms, it wouldn’t surprise her to see proud smiles. They are waiting for something.
<strong> That wait is almost over.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
//<Image
//  className='w-full h-full'
//    src={knightsMintingSoon}
//  alt='Knights Minting Soon'
//  placeholder='blur'
//  />
//<Image
//  className='imgfix overflow-hidden rounded-md mb-8'
//  src={scroll}
  //alt='The castle.'
  //placeholder='blur'
///>
