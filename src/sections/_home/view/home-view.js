'use client';

import { useScroll } from 'src/hooks/use-scroll';
import ScrollProgress from 'src/components/scroll-progress';

import HomeFaq from '../home-faqs';
import HomeHero from '../home-hero';
import MarketingServicesInclude from '../marketing-services-include';

// ----------------------------------------------------------------------



export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <MarketingServicesInclude/>

      <HomeFaq />

    </>
  );
}
