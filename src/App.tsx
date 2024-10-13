// src/App.js
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Products />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
