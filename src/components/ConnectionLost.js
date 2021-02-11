//Display message when connection is lost

const ConnectionLost = (props) => {
  return (
    <div>
      <p>Game Over</p>
      <p>{props.player} has disconnected, ending the game.</p>
      <button onClick={props.disconnect}>Exit</button>
    </div>
  );
}

export default ConnectionLost;
