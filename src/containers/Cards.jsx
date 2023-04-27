import Card from "../components/Card";
import cards from "../data/cards.json";

const Cards = () => {
    return(
        <section className='cards-section'>
            <div className='cards-container'>
                {cards.map((card, index) => <Card key={index} card={card}/> )}
            </div>
        </section>
    )
};

export default Cards;