import quotes from '/images/bg-quotes.png';
import Testimonial from "../components/Testimonial";
import testis from "../data/testimonials.json";

const Testimonials = () => {
    return(
        <section className='testimonials-section'>
            <img className='testim-quotes' src={quotes} />
            <div className='testimonials-container'>
                {testis.map((testi, index) => <Testimonial key={index} testi={testi}/>)}
            </div>
        </section>
    )
}

export default Testimonials;