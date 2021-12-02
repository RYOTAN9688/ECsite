import model1 from './public/model.jpg';
import model2 from './public/model2.jpg';
interface Props {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
}

export const sliderItem: Props[] = [
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
    title: 'Winter Sele',
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: 'fff',
  },
];
