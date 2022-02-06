import type { NextPage } from 'next';

type HomeProps = {
  title: string
}

const bar = 'Hello';

const asda = 'adasd';

const Home: NextPage<HomeProps> = ({ title }) => {
  return (
    <>
      <h1>Hello World</h1>
      <p>{title}</p>
    </>
  );
};

export default Home;
