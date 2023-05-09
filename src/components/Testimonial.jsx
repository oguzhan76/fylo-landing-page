import PropTypes from 'prop-types';

const Testimonial = ({ testi }) => {
    return (
        <div className='ref-card-container'>
            <div className='ref-card'>
                <p>{testi.text}</p>
                <div className='ref-card-signature'>
                    <div className='ref-card-image'>
                        <img src={testi.img_url}/>
                    </div>
                    <div className='ref-card-signature__name'>
                        <p>{testi.name}</p>
                        <small>{testi.title}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

Testimonial.propTypes = {
    testi: PropTypes.object
}

export default Testimonial;