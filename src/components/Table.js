//The area where the cards are played to
import CardImage from './CardImage';
import cardBack from "../assets/cards/playing-card-back.jpg";



const Table = (props) => {
  console.log('Trick is',props.trick)
  let tieFirstPlayer;
  let imageBackClass;
  if(props.userId === props.tieStartPlayer) {
    tieFirstPlayer = true;
    imageBackClass = 'image-back-large-clickable';
  } else {
    tieFirstPlayer = false;
    imageBackClass = 'image-back-large';
  }
  return (
      <>
        {
          !props.tieBreaker
          ?
            <>
              <div className="flex-container">
                <div>
                  <p>Trump</p>
                  <CardImage card={props.trump} />
                </div>
                <div>
                  <p>Played Cards</p>
                  <div className="flex-container">
                    {
                      props.trick.map( (card,i) => (
                        <div key={i}>
                          <CardImage card={card.card} />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </>
          :
            <>
              <p>Tie Breaker</p>
              {
                tieFirstPlayer
                ? <p>Pick a card, ace is high, low takes!</p>
                : <p>Waiting for other players to pick card.</p>
              }
              
              <div>
                <img className="{imageBackClass}" src={cardBack}></img>
              </div>
            </>
      }
    </>
  );

}

export default Table;
