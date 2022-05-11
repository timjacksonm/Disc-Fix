import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { ReactComponent as Basket } from '../assets/disc-golf-basket.svg';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="mainContent">
        <Hero />
        <Basket className="basket" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
