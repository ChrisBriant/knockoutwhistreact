//Show the results of each round


const RoundResults = (props) => {
  console.log('ROUND RESULTS',props);
  return(
    <>
      <div>
        {
          props.roundResults.map((result,i) => (
            <p key={i}>Round {i+1}: {result.winner_name}</p>
          ))
        }
      </div>
    </>
  );
}

export default RoundResults;
