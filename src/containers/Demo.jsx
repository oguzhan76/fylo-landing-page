import productive_img from '/images/illustration-stay-productive.png';
import icon from '/images/icon-arrow.svg';

const Demo = () => {
    return(
        <section className='demo-section'>
            <div className='demo-container'>
                <div>
                    <img src={productive_img}/>
                </div>
                <div className='demo-text'>
                    <div className='demo-text__heading'>
                        <h1>Stay productive,</h1>
                        <h1>wherever you are</h1>
                    </div>
                    <div className='demo-text__body'>
                        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    </div>
                    <div className='demo-text__link'>
                        <a href='#'>See how Fylo works <img src={icon}/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Demo;