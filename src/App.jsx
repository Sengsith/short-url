import './sass/main.scss';

import Header from './components/header/Header';
import Hero from './components/Hero';
import Statistics from './components/statistics/Statistics';
import CallToAction from './components/CallToAction';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
