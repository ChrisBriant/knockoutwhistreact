//The area where the cards are played to
import {useState} from 'react';
import CardImage from './CardImage';
import cardBack from "../assets/cards/playing-card-back.jpg";
import sock from '../services/socket';

//// TODO: Create a key display component to give tie breaker info as below
// if suit == 'h':
//     return 1
// elif suit == 's':
//     return 2
// elif suit == 'd':
//     return 3
// elif suit == 'c':
//     return 4

const Table = (props) => {
  console.log('Trick is',props.trick)
  let tieFirstPlayer;
  let imageBackClass;
  let included;

  const [chosenCard,setChosen] = useState(null);

  if(props.userId === props.tieStartPlayer) {
    tieFirstPlayer = true;
    imageBackClass = 'image-back-large-clickable';
  } else {
    tieFirstPlayer = false;
    imageBackClass = 'image-back-large';
  }

  if(props.ties.includes(props.userId)) {
    included = true;
  } else {
    included = false;
  }

  const pickTieBreak = async (tieFirstPlayer) => {
    if(tieFirstPlayer) {
      console.log('I am first', tieFirstPlayer);
      //Get a random card from the deck
      let card = props.tieBreakerDeck[Math.floor(Math.random() * props.tieBreakerDeck.length)];
      setChosen(card);
      console.log('I am first', card);
      let payload = {
        'type' : 'tie_breaker_choice',
        'card' : card,
        'client_id' : props.userId,
        'room_id' : props.roomId,
        'ties' : props.ties,
        'tie_break_id' : props.tieBreakId
      }
      console.log(payload);
      await sock.send(JSON.stringify(payload));
    }
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
              {
                included
                ?
                  <div>
                    <img className={imageBackClass} src={cardBack} onClick={() => pickTieBreak(tieFirstPlayer)}></img>
                  </div>
                : null
              }
              {
                chosenCard
                ?
                <>
                  <p>You have picked</p>
                  <CardImage
                    id={chosenCard}
                    card={chosenCard}
                  />
                </>
                : null
              }
            </>
      }
    </>
  );

}

export default Table;
