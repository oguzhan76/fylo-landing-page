import PropTpyes from 'prop-types';

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

// Card.propTypes = {
//     title: PropTpyes.string,
//     body: PropTpyes.string,
//     image_url: PropTpyes.string
// }

Card.propTypes = {
    card: PropTpyes.object
}

export default Card;