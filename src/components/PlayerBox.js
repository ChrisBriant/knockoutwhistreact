

const PlayerBox = (props) => {
  return(
    <div>
      <p>Players:</p>
      {
        props.otherMembers.map((member,i) => (
          <p key={i}>{member.id === props.startPlayer ? '>' : null} {member.name}</p>
        ))
      }
    </div>
  );
}

export default PlayerBox;
