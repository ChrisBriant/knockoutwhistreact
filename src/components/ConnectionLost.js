//Display message when connection is lost

const ConnectionLost = (props) => {
  return (
    <div>
      <p>Game Over</p>
      <p>{props.player} has disconnected, ending the game.</p>
    </div>
  );
}

export default ConnectionLost;
