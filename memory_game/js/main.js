var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png" ,
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png" ,
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png" ,
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png "
}
];
var cardsInPlay = [];
var allCards = [];
var checkForMatch = function() {
	console.log(cardsInPlay[0]);
if (cardsInPlay[0][0] === cardsInPlay[1][0]) {
	alert ("You found a match!");
	allCards.push (cardsInPlay[0][1], cardsInPlay [1][1])

	allCards.length === 4 ? alert("Congratulations, you finished the game!") : console.log("Winning condition not met.");

} else {
	alert ("Sorry, try again.");
	document.getElementById(cardsInPlay[0][1]).setAttribute('src' , "images/back.png");
	document.getElementById(cardsInPlay[1][1]).setAttribute('src' , "images/back.png");
}
cardsInPlay =[];


}
var flipCard = function() {
var cardId = this.getAttribute('data-id');
console.log(cardId);
this.setAttribute('src' , cards[cardId].cardImage);
cardsInPlay.push([cards[cardId].rank, cardId]);
if (cardsInPlay.length === 2) {
console.log("User flipped " + cards[cardId].rank); 
checkForMatch();
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}

}
var createBoard = function() {
	for (i = 0 ; i < cards.length ; i++) {
var cardElement = document.createElement ('img');
cardElement.setAttribute('src' , "images/back.png");
cardElement.setAttribute('data-id' , i);
cardElement.setAttribute('id' , i);
cardElement.addEventListener('click',flipCard);
document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();



