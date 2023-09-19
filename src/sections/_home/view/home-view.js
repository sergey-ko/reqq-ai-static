'use client';


import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import { _pricingMarketing } from 'src/sections/_home/_pricing';

import HomeHero from '../home-hero';
import PricingMarketing from '../pricing-marketing';
import MarketingLandingFreeSEO from '../marketing-landing-free-seo';


// ----------------------------------------------------------------------



export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      {/* <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFreeSEO /> */}
    </>
  );
}
