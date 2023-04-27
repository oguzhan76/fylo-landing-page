import Header from './containers/Header';
import Cards from './containers/Cards';
import Hero from './containers/Hero';
import Demo from './containers/Demo';
import 'sanitize.css';
import './styles/App.scss';


function App() {

  return (
    <div className='main'>
      <Header/>
      <Hero/>
      <Cards/>
      <Demo/>
    </div>
  )
}

export default App;
