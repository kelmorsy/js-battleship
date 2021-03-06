import Player from '../../player';
import Gameboard from '../../gameboard';
import Ship from '../../ship';

/**
 * Creates an array of players based on default internal ship lengths. Also 
 * calls each non human player's autoplace ship methods. 
 * @param {string} playerName Main player's name
 * @returns {Player[]}
 */
export default async function setUpPlayers(playerName) {
  const playerList = [
    { name: playerName, isPC: false },
    { name: 'Computer', isPC: true },
  ];
  // const shipLengths = [2, 2, 2, 3, 3, 4, 4, 5, 6];
  const shipLengths = [1]

  const players = Player.createPlayers({
    playerList,
    shipLengths,
    Gameboard,
    Ship,
  });

  players.forEach(player => {
    if (player.isPC) player.board.autoPlaceShips(player.ships);
  });

  return players;
}
