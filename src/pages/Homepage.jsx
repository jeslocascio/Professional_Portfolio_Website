import Header from '../components/Header';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMe />
      <Portfolio />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Homepage
