import {useState} from 'react';
//import { animateScroll } from "react-scroll";
import sock from '../services/socket';
import images from '../services/image-loader';
import image from '../assets/cards/s3.png';
import CardImage from './CardImage';

require('../assets/cards/s2.png');
console.log('here');



const getCardPicture = (card) => {
  console.log(card);
  let imagePath = `../assets/cards/${card}.png`;
  return imagePath;
};

const Hand = (props) => {
  let pickTrump;
  let myTurn;

  if(props.startRound && props.startPlayer === props.userId )
  {
    pickTrump = true;
  } else {
    pickTrump = false;
  }

  if(props.startPlayer === props.userId) {
    myTurn = true;
  } else {
    myTurn = false;
  }


  const playCard = async (e) => {
    if(myTurn) {
      console.log('here is the id', e.target.id);
      let payload = {
        'type' : 'play_card',
        'card' : e.target.id,
        'client_id' : props.userId,
        'room_id' : props.roomId
      }
      await sock.send(JSON.stringify(payload));
    }
  }

  const handlePickTrump = async (e) => {
    let payload = {
      'type' : 'pick_trump',
      'card' : e.target.id,
      'client_id' : props.userId,
      'room_id' : props.roomId
    }
    await sock.send(JSON.stringify(payload));
  }

  return (
    <>
      { pickTrump
        ? <p>Congratulations you won the round! Please pick a trup card.</p>
        : null
      }
      <div className="flex-container">
        {
          props.hand.map((card,i) => (
            <div id={card} key={i} onClick={pickTrump ? handlePickTrump : playCard}>
              <CardImage
                id={card}
                card={card}
                userId={props.userId}
                roomId={props.roomId}
                myTurn={myTurn}
              />
            </div>
          ))
        }
      </div>
    </>
  );
}
//src={require(getCardPicture(card))}
export default Hand;
