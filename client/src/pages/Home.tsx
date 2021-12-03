import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Products } from '../components/Products';

import { Slider } from '../components/Slider';

export const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};
