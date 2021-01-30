let images = [];

function getCard(val) {
  if(val + 2 < 11) {
    return (val + 2).toString();
  } else {
    switch(val + 2) {
      case 11:
        return 'J';
      case 12:
        return 'Q';
      case 13:
        return 'K';
      case 14:
        return 'A';
    }
  }
}


function getSuit(val) {
  switch (val) {
    case 0:
      return 's';
    case 1:
      return 'd';
    case 2:
      return 'c';
    case 3:
      return 'h';
  }
}

for(let i=0;i<4;i++) {
  for(let j=0;j<13;j++) {
    images.push(`../assets/cards/${getSuit(i)}${getCard(j)}.png`);
  }
}

console.log(JSON.stringify(images));

export default images;
