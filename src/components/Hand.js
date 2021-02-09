import {useState} from 'react';
//import { animateScroll } from "react-scroll";
import sock from '../services/socket';
import images from '../services/image-loader';
import image from '../assets/cards/s3.png';
import CardImage from './CardImage';
import getSuitName from '../services/suithelper';

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

  const [message,setMessage] = useState('');

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

  //Check that the card selected is following the follow suit role
  const isCardValid = (card) => {
    if(props.trick.length < 1) {
      return true;
    } else {
      let suitPlayed = card.charAt(0);
      let suitOfTrick = props.trick[0].card.charAt(0);
      let suitsInHand = [];

      if(suitPlayed === suitOfTrick){
        return true;
      } else {
        for(let i=0;i<props.hand.length;i++) {
          console.log(props.hand[i]);
          suitsInHand.push(props.hand[i].charAt(0));
        }

        //Logic for follow suit
        console.log('FOLLOW SUIT', suitsInHand, suitPlayed);
        if(!suitsInHand.includes(suitOfTrick)) {
          return true;
        } else {
          setMessage(`Your selection must folow suit, the suit is ${getSuitName(suitOfTrick)}`);
          return false;
        }
      }
    }
  }


  const playCard = async (e) => {
    if(myTurn) {
      console.log('here is the id', isCardValid(e.target.id));
      if(isCardValid(e.target.id)) {
        //Reset the message
        setMessage('');
        let payload = {
          'type' : 'play_card',
          'card' : e.target.id,
          'client_id' : props.userId,
          'room_id' : props.roomId
        }
        await sock.send(JSON.stringify(payload));
      }
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
        ? <p>Congratulations you won the round! Please pick a trump card.</p>
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
      <div>
        <p className="errorMessage">{message}</p>
      </div>
    </>
  );
}
//src={require(getCardPicture(card))}
export default Hand;
