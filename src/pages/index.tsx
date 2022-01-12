import type { NextPage } from 'next';
import Head from 'next/head';
import { Hero } from '~/components/index/hero/Hero';
import { About } from '~/components/index/about/About';
import { Pricing } from '~/components/index/pricing/Pricing';
import { Castle } from '~/components/index/castle/Castle';
import { Roadmap } from '~/components/index/roadmap/Roadmap';
import { Layout } from '~/components/layout/Layout';
import { ScrollToTop } from '~/components/shared/ScrollToTop';

const Home: NextPage = () => {
  return (
    <Layout className='bg-black'>
      <Head>
        <title>Knights For Days</title>
        <meta
          name='description'
          content='A medieval kNFT Project on Ethereum'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='awwratspack' key='twhandle' />
        <meta
          name='twitter:image'
          content='https://storage.googleapis.com/knights-for-days-images/Featured%20Image.png'
        />

        {/* Open Graph */}
        <meta property='og:title' content='Knights For Days' />
        <meta
          property='og:description'
          content='A medieval kNFT Project on Ethereum'
        />
        <meta
          property='og:image'
          content='https://storage.googleapis.com/knights-for-days-images/Featured%20Image.png'
        />
      </Head>
      <Hero />
      <About />
      <Castle />
      <Pricing />
      <Roadmap />
      <ScrollToTop />
    </Layout>
  );
};

export default Home;
