import PropTypes from 'prop-types';

const Card = ({ card }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={card.image_url}/>
            </div>
            <h4>{card.title}</h4>
            <p>{card.body}</p>
        </div>
    )
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;