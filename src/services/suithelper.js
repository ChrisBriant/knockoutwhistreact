//Return the value for a given suit by letter

function getSuitName(suit) {
  switch(suit) {
    case 'h':
      return 'hearts';
    case 'c':
      return 'clubs';
    case 'd':
      return 'diamonds';
    case 's':
      return 'spades';
    default:
      return null;
  }
}

export default getSuitName;
