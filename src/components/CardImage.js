import sock from '../services/socket';
import s2 from "../assets/cards/s2.png";
import s3 from "../assets/cards/s3.png";
import s4 from "../assets/cards/s4.png";
import s5 from "../assets/cards/s5.png";
import s6 from "../assets/cards/s6.png";
import s7 from "../assets/cards/s7.png";
import s8 from "../assets/cards/s8.png";
import s9 from "../assets/cards/s9.png";
import s10 from "../assets/cards/s10.png";
import sJ from "../assets/cards/sJ.png";
import sQ from "../assets/cards/sQ.png";
import sK from "../assets/cards/sK.png";
import sA from "../assets/cards/sA.png";
import d2 from "../assets/cards/d2.png";
import d3 from "../assets/cards/d3.png";
import d4 from "../assets/cards/d4.png";
import d5 from "../assets/cards/d5.png";
import d6 from "../assets/cards/d6.png";
import d7 from "../assets/cards/d7.png";
import d8 from "../assets/cards/d8.png";
import d9 from "../assets/cards/d9.png";
import d10 from "../assets/cards/d10.png";
import dJ from "../assets/cards/dJ.png";
import dQ from "../assets/cards/dQ.png";
import dK from "../assets/cards/dK.png";
import dA from "../assets/cards/dA.png";
import c2 from "../assets/cards/c2.png";
import c3 from "../assets/cards/c3.png";
import c4 from "../assets/cards/c4.png";
import c5 from "../assets/cards/c5.png";
import c6 from "../assets/cards/c6.png";
import c7 from "../assets/cards/c7.png";
import c8 from "../assets/cards/c8.png";
import c9 from "../assets/cards/c9.png";
import c10 from "../assets/cards/c10.png";
import cJ from "../assets/cards/cJ.png";
import cQ from "../assets/cards/cQ.png";
import cK from "../assets/cards/cK.png";
import cA from "../assets/cards/cA.png";
import h2 from "../assets/cards/h2.png";
import h3 from "../assets/cards/h3.png";
import h4 from "../assets/cards/h4.png";
import h5 from "../assets/cards/h5.png";
import h6 from "../assets/cards/h6.png";
import h7 from "../assets/cards/h7.png";
import h8 from "../assets/cards/h8.png";
import h9 from "../assets/cards/h9.png";
import h10 from "../assets/cards/h10.png";
import hJ from "../assets/cards/hJ.png";
import hQ from "../assets/cards/hQ.png";
import hK from "../assets/cards/hK.png";
import hA from "../assets/cards/hA.png";

const CardImage = (props) => {
  const getCard = () => {
    switch(props.card) {
      case 's2':
        return s2;
      case 's3':
        return s3;
      case 's4':
        return s4;
      case 's5':
        return s5;
      case 's6':
        return s6;
      case 's7':
        return s7;
      case 's8':
        return s8;
      case 's9':
        return s9;
      case 's10':
        return s10;
      case 'sJ':
        return sJ;
      case 'sQ':
        return sQ;
      case 'sK':
        return sK;
      case 'sA':
        return sA;
      case 'd2':
        return d2;
      case 'd3':
        return d3;
      case 'd4':
        return d4;
      case 'd5':
        return d5;
      case 'd6':
        return d6;
      case 'd7':
        return d7;
      case 'd8':
        return d8;
      case 'd9':
        return d9;
      case 'd10':
        return d10;
      case 'dJ':
        return dJ;
      case 'dQ':
        return dQ;
      case 'dK':
        return dK;
      case 'dA':
        return dA;
      case 'c2':
        return c2;
      case 'c3':
        return c3;
      case 'c4':
        return c4;
      case 'c5':
        return c5;
      case 'c6':
        return c6;
      case 'c7':
        return c7;
      case 'c8':
        return c8;
      case 'c9':
        return c9;
      case 'c10':
        return c10;
      case 'cJ':
        return cJ;
      case 'cQ':
        return cQ;
      case 'cK':
        return cK;
      case 'cA':
        return cA;
      case 'h2':
        return h2;
      case 'h3':
        return h3;
      case 'h4':
        return h4;
      case 'h5':
        return h5;
      case 'h6':
        return h6;
      case 'h7':
        return h7;
      case 'h8':
        return h8;
      case 'h9':
        return h9;
      case 'h10':
        return h10;
      case 'hJ':
        return hJ;
      case 'hQ':
        return hQ;
      case 'hK':
        return hK;
      case 'hA':
        return hA;
    }
  }

  const playCard = async (e) => {
    let payload = {
      'type' : 'play_card',
      'card' : props.card,
      'client_id' : props.userId,
      'room_id' : props.roomId
    }
    await sock.send(JSON.stringify(payload));
  }

  return (
    <div className="cardfront" onClick={playCard}>
      <img id={props.id} src={getCard()} alt={props.card}/>
    </div>
  );
}

export default CardImage;
