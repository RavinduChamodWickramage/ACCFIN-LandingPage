
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import KnowledgeHub from './components/KnowledgeHub/KnowledgeHub';
import Navbar from './components/Navbar/Navbar';
import Offers from './components/Offers/Offers';
import Partners from './components/Partners/Partners';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Offers />
      <Journey />
      <Reviews />
      <Partners />
      <KnowledgeHub />
      <Footer />
    </div>
  );
}

export default App;
