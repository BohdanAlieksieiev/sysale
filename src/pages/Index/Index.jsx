import React from 'react';
import Shampoo from '../../components/Shampoo/Shampoo';
import classes from './Index.module.scss';
import shampoo1Image from '../../assets/images/shampoo1.png';

const arrShampoo = [
  {
    img: shampoo1Image,
    title: 'Шампунь',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    priceOne: 200,
  },
  {
    img: shampoo1Image,
    title: 'Шампунь ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    priceOne: 200,
  },
  {
    img: shampoo1Image,
    title: 'Шампунь',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    priceOne: 200,
  },
];

const Index = () => {
  return (
    <>
      <main className={classes.main}>
        {arrShampoo.map((item, index) => {
          return <Shampoo {...item} key={index} />;
        })}
      </main>
    </>
  );
};

export default Index;
