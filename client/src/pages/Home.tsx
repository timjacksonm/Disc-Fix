import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { ReactComponent as Basket } from '../assets/disc-golf-basket.svg';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <Navbar />
      <main className="mainContent">
        <Hero />
        <Basket className="basket" />
      </main>
    </div>
  );
};

export default Home;
