import Header from './containers/Header';
import Cards from './containers/Cards';
import Hero from './containers/Hero';
import Demo from './containers/Demo';
import Testimonials from './containers/Testimonials';
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
    </div>
  )
}

export default App;
