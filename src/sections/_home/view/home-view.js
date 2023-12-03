'use client';


import { useScroll } from 'framer-motion';

import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';
import ScrollProgress from 'src/components/scroll-progress';
import { _pricingMarketing } from 'src/sections/_home/_pricing';

import HomeHero from '../home-hero';
import HomeFaq from '../home-faqs';
import HomeForDesigner from '../home-for-designer';
import PricingMarketing from '../pricing-marketing';
import MarketingLandingFreeSEO from '../marketing-landing-free-seo';
import MarketingServicesInclude from '../marketing-services-include';






// ----------------------------------------------------------------------



export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      {/* <PricingMarketing plans={_pricingMarketing} /> */}

      {/* <HomeForDesigner /> */}

      <MarketingServicesInclude/>

      {/* <MarketingLandingFreeSEO /> */}

      <HomeFaq />

    </>
  );
}
