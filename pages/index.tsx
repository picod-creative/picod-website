import { useState } from 'react';
import type { NextPageWithLayout } from '../src/@types';
import Layout from '../src/components/common/Layout';
import Hero from '../src/components/partials/index/Hero';
import PortfolioSection from '../src/components/partials/index/PortfolioSection';
import SectionNav, {
  sections,
} from '../src/components/partials/index/SectionNav';
import ServiceSection from '../src/components/partials/index/ServiceSection';

const Home: NextPageWithLayout = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  return (
    <>
      <Hero />
      <SectionNav {...{ activeSection, setActiveSection }} />
      <ServiceSection
        active={activeSection === 'services'}
        onEnter={setActiveSection}
      />
      <PortfolioSection
        active={activeSection === 'portfolio'}
        onEnter={setActiveSection}
      />
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <Layout wrapInsideMain={false} showMessageButton title="Picod creative">
      {page}
    </Layout>
  );
};

export default Home;
