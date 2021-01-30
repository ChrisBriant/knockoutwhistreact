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
  return (
    <>
      <div className="flex-container">
        {
          props.hand.map((card,i) => (
            <div key={i}>{card}
              <CardImage
                card={card}
                userId={props.userId}
                roomId={props.roomId}
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
