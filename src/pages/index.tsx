import type { NextPage } from 'next';

type HomeProps = {
  title: string
}

const Home: NextPage<HomeProps> = ({ title }) => {
  return (
    <>
      <h1>Hello World</h1>
      <p>{title}</p>
    </>
  );
};

export default Home;
