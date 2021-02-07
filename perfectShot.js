const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let position = [0, 0];
  for (let x = 0; x <= moves.length; x++) {
    if (moves[x] === "east") {
      position[0] = position[0] + 1;
      console.log(position);
    }
    else if (moves[x] === "west") {
      position[0] = position[0] - 1;
      console.log(position);
    }
    else if (moves[x] === "north") {
      position[1] = position[1] + 1;
      console.log(position);
    }
    else if (moves[x] === "south") {
      position[1] = position[1] - 1;
      console.log(position);
    }
  }
  return position;
}
console.log(finalPosition(moves));
