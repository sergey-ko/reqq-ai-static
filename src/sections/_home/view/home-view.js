'use client';

import { useScroll } from 'framer-motion';

import { _pricingHome } from 'src/_mock';
import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />
    </>
  );
}
