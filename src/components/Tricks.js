//Shows the winnings
import cardBack from "../assets/cards/playing-card-back.jpg";


const Tricks = (props) => {
  console.log(props);
  return (
    <div>
      <p>Round {props.roundNumber}</p>
      <p>winnings</p>
      <div className="flex-container">
        {
          props.completedTricks.map((trick, i) => (
              trick.winner.player === props.userId
              ?
                <div key={i} className="card-back">
                  <img className="card-back" src={cardBack}></img>
                </div>
              : null
          ))
        }
      </div>
    </div>
  );
}

export default Tricks;
