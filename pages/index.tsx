import type { NextPageWithLayout } from "../@types";
import Layout from "../components/common/Layout";

const Home: NextPageWithLayout = () => {
  return <p>PICOD</p>;
};

Home.getLayout = (page) => {
  return <Layout title="Picod creative">{page}</Layout>;
};

export default Home;
