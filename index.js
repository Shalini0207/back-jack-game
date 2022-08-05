const min = 1;
const max = 13;

function getRandomCards(){
    let card = Math.floor(Math.random() * (max - min + 1)) + min;
    if (card===1) {
        card = 11;
    } else if(card>10) {
        card = 10;
    }
    return card;
}

// generating a random number
const firstcard = getRandomCards();
const secondcard = getRandomCards();

let sumnum = firstcard+secondcard;
let message = "";

let cards = [firstcard, secondcard];

let hasBlackJack = false;
let isAlive = true;

let startBtn = document.getElementById('start-game');
let startaudio = new Audio('audio/startaudio.mp3');

function renderGame(){
    startaudio.play();
    document.getElementById('cards').textContent= 'Cards: ';

    cards.forEach(element => {
        document.getElementById('cards').textContent+= element+' ';
    });

    document.getElementById('sum-cards').textContent= 'Sum: '+ sumnum;
    document.querySelector('#sum-cards').textContent= 'Sum: '+ sumnum;
    if (sumnum===21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
    } else if(sumnum<21) {
        message = 'Do you want to try another card?';
    }
    else{
        message = "You're out of the game.";
        isAlive = false;
    }
    document.getElementById('message').textContent = message;
}

startBtn.addEventListener('click', renderGame);

let newCardBtn = document.getElementById('new-card');

newCardBtn.addEventListener('click', ()=>{
    startaudio.play();

    let newcard = getRandomCards();
    if(isAlive==true && hasBlackJack==false){
    cards.push(newcard);
    sumnum+= newcard;
    }
    renderGame();
});

let playerObj = {
    palyername : 'Shalini',
    playerChips : 145
}

document.getElementById('player-info').innerHTML = playerObj.palyername + ': $' + playerObj.playerChips;