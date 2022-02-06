import type { NextPage } from 'next';

type HomeProps = {
  title: string
}

const bla = 'Hello';

const Home: NextPage<HomeProps> = ({ title }) => (
  <>
    <h1>Hello World</h1>
    <p>{title}</p>
  </>
);

export default Home;
