import { useState } from 'react';
import { GetStaticProps } from 'next';
import type { NextPageWithLayout } from '../src/@types';
import FrontLayout from '../src/components/layouts/FrontLayout';
import Hero from '../src/components/partials/index/Hero';
import PortfolioSection from '../src/components/partials/index/PortfolioSection';
import WhyUsSection from '../src/components/partials/index/WhyUsSection';
import SectionNav from '../src/components/partials/index/SectionNav';
import ServiceSection from '../src/components/partials/index/ServiceSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OurWeaponsSection from '../src/components/partials/index/OurWeaponsSection';
import OurTeamSection from '../src/components/partials/index/OurTeamSection';
import TestimonialsSection from '../src/components/partials/index/TestimonialsSection';
import { sections } from '../src/constants/config';
import LetsWorkTogetherSection from '../src/components/partials/index/LetsWorkTogetherSection';

const Home: NextPageWithLayout = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  return (
    <>
      <Hero />
      <SectionNav activeSection={activeSection} />
      <ServiceSection
        active={activeSection === 'services'}
        onEnter={setActiveSection}
      />
      <PortfolioSection
        active={activeSection === 'portfolio'}
        onEnter={setActiveSection}
      />
      <WhyUsSection
        active={activeSection === 'whyUs'}
        onEnter={setActiveSection}
      />
      <OurWeaponsSection
        active={activeSection === 'ourWeapons'}
        onEnter={setActiveSection}
      />
      <OurTeamSection
        active={activeSection === 'ourTeams'}
        onEnter={setActiveSection}
      />
      <TestimonialsSection
        active={activeSection === 'testimonials'}
        onEnter={setActiveSection}
      />
      <LetsWorkTogetherSection />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
  },
});

Home.getLayout = (page) => {
  return (
    <FrontLayout
      wrapInsideMain={false}
      showMessageButton
      title="Picod creative"
    >
      {page}
    </FrontLayout>
  );
};

export default Home;
