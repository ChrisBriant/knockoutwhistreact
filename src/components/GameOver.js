//Display the end of game results

const GameOver = (props) => {
  return (
    <div>
      <p>Scores</p>
      {
        props.winner.player === props.userId
        ?
          <p>Congratulations you have won</p>
        :
          <p>The winner is {props.winner.winner_name}</p>
      }
      <table>
        <thead><tr><th>Player</th><th>Score</th></tr></thead>
        <tbody>
          {
            props.winner.scores.map((score, i) => (
              <tr key={i}>
                <td>{score.winner_name}</td>
                <td>{score.score}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default GameOver;
