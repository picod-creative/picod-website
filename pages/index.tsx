import type { NextPageWithLayout } from '../src/@types';
import Layout from '../src/components/common/Layout';
import Hero from '../src/components/partials/index/Hero';
import SectionNav from '../src/components/partials/index/SectionNav';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <SectionNav />
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
