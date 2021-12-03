import model1 from './public/model.jpg';
import model2 from './public/model2.jpg';
import shirt from './public/shirt.jpg';
import jacket from './public/jackets.jpg';
import denim from './public/denim.jpg';

interface sliderProps {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
}

export const sliderItem: sliderProps[] = [
  {
    id: 1,
    img: model1,
    title: 'SUMMER SALE',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'f5fafd',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/DG69bQ4/2.png',
    title: 'AUTUMN COLLECTION',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'fcf1ed',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/cXFnLLV/3.png',
    title: 'LOUNGEWEAR LOVE',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'fbf0f4',
  },
  {
    id: 4,
    img: model2,
    title: 'Winter SALE',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'fff',
  },
];

export interface categoriesProps {
  id: number;
  img: string;
  title: string;
  cat: string;
}

export const categories: categoriesProps[] = [
  {
    id: 1,
    img: shirt,
    title: 'SHIRT',
    cat: 'shirt',
  },
  {
    id: 2,
    img: jacket,
    title: 'JACKET',
    cat: 'jacket',
  },
  {
    id: 3,
    img: denim,
    title: 'DENIM',
    cat: 'denim',
  },
];
