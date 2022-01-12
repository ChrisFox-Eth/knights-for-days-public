import React from 'react';
import { Image } from '~/components/shared/Image';
import { Link } from '~/components/shared/Link';
import logo from '~/assets/images/kfdheader.png';
import { TwitterLogo } from '~/components/shared/svg/TwitterLogo';
import { DiscordLogo } from '~/components/shared/svg/DiscordLogo';
import { MenuLink } from '~/components/shared/MenuLink';

export const Header = () => {
  return (
    <div className='py-4 flex flex-col bg-gray-800 md:flex-row justify-between fixed items-center w-full z-50 bg-opacity-30'>
      <Link href='/' className='mr-4'>
        <Image
          className='w-12 h-12 mx-4 hidden md:block'
          src={logo}
          alt='Knights For Days logo'
          placeholder='blur'
        />
      </Link>
      <div className='flex px-4'>
        <div className='flex items-center text-white'>
          <MenuLink
            href='https://www.twitter.com/knightsfordays'
            className='mr-4'
            target='_blank'>
            <TwitterLogo width={24} height={24} />
          </MenuLink>
          <MenuLink href='https://discord.gg/JVD89UyaPm' target='_blank'>
            <DiscordLogo width={24} height={24} />
          </MenuLink>
        </div>
      </div>
    </div>
  );
};
