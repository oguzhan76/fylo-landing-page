import img_intro from '../assets/images/illustration-intro.png';
import image1 from '../assets/images/icon-access-anywhere.svg';
import image2 from '../assets/images/icon-security.svg';
import image3 from '../assets/images/icon-collaboration.svg';
import image4 from '../assets/images/icon-any-file.svg';

// import Card from './Card';

const MainPage = () => {
    return (
        <div className='main'>
            <section className='intro-container'>
                <div className='intro'>
                    <img src={img_intro}/>
                    <h4 className='heading'>All your files in one secure location, accessible anywhere.</h4>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <button className='intro-button'>Get Started</button>
                </div>
                <div className='background'/>
            </section>
            <section className='cards-section'>
                <div className='cards-container'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={image1}/>
                        </div>
                        <h4>Access your files, anywhere</h4>
                        <p>The ability to use a smartphone, tablet, or computer <br/> to access your account means your files follow you everywhere.</p>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={image2}/>
                        </div>
                        <h4>Security you can trust</h4>
                        <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files</p>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={image3}/>
                        </div>
                        <h4>Real-time collaboration</h4>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={image4}/>
                        </div>
                        <h4>Store any type of file</h4>
                        <p>Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all file <br/>types to be securely stored and shared.</p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default MainPage;