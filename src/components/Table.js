//The area where the cards are played to
import CardImage from './CardImage';


const Table = (props) => {
  console.log('Trick is',props.trick)
  return (
    <div>
      <div>
        <p>Trump</p>
        <CardImage card={props.trump} />
      </div>
      <div>
        <p>Played Cards</p>
        {
          props.trick.map( (card,i) => (
            <div key={i}>
              <CardImage card={card.card} />
            </div>
          ))
        }
      </div>
    </div>
  );

}

export default Table;
