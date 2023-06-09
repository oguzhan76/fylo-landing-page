import img_hero from '/illustration-intro.png';
import curvy from '/bg-curvy-desktop.svg';

const Hero = () => {
    return(
        <section className='hero-container'>
            <div className='hero'>
                <img src={img_hero}/>
                <h4 className='heading'>All your files in one secure location, accessible anywhere.</h4>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className='button'>Get Started</button>
            </div>
            <div className='background'><img src={curvy}/></div>
        </section>
    )
};

export default Hero;