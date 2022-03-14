import type { NextPageWithLayout } from '../src/@types';
import Layout from '../src/components/common/Layout';
import Hero from '../src/components/partials/index/Hero';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
    </>
  );
};

Home.getLayout = (page) => {
  return (
    <Layout wrapInsideMain={false} title="Picod creative">
      {page}
    </Layout>
  );
};

export default Home;
