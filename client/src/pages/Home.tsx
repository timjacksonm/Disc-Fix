import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { ReactComponent as Basket } from '../assets/disc-golf-basket.svg';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="mainContent">
        <Hero />
        <Basket className="basket" />
      </main>
      <div className="footer">footer</div>
    </div>
  );
};

export default Home;
