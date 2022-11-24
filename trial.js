const playerCards = {
    'hello': {

    }
};

const player = playerCards.slice(2);

player.map(e => console.log('hello ' + e));

const player2 = playerCards.slice(3);
player2.map(e => console.log('hello ' + e));
// console.log(mapFunction(playerCards));