import Header from './containers/Header';
import Cards from './containers/Cards';
import Hero from './containers/Hero';
import Demo from './containers/Demo';
import Testimonials from './containers/Testimonials';
import FormContainer from './containers/FormContainer';
import Footer from './containers/Footer';
import 'sanitize.css';
import './styles/App.scss';


function App() {

  return (
    <div className='main'>
      <Header/>
      <Hero/>
      <Cards/>
      <Demo/>
      <Testimonials/>
      <FormContainer/>
      <Footer/>
    </div>
  )
}

export default App;