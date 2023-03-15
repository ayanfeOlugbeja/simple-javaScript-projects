let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let cardEl = document.querySelector("#card-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.querySelector("#message-el")
let player = {
	name : "iowereth",
	chips : 150
	 }
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomNumber(){
	let randomNumber = Math.floor(Math.random()*13)+1
	if (randomNumber > 10){
		return 10
	}else if (randomNumber === 1){
		return 11
	}else{
		return randomNumber
	}
}
function startGame(){
	isAlive = true
	let firstCard = getRandomNumber()
	let secondCard = getRandomNumber()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
  	 renderGame()

}

function renderGame(){

cardEl.textContent = "Cards: " 
for (let i = 0; i < cards.length; i++){
cardEl.textContent += cards[i] + " "
}
sumEl.textContent = "Sum:" + sum

	if (sum <= 20){
	message = "Do you want to draw a new card?"
}else if (sum === 21){
	message = "You've got Blackjack"
	hasBlackJack = true
	//playerEl.textContent = player.name + ": $" + player.chips + 5
	
}
else{
	message = "You are out of the game!"
	isAlive = false
	//playerEl.textContent = player.name + ": $" + player.chips - 5
	
}
messageEl.textContent = message

}
function newCard(){
	if (isAlive === true && hasBlackJack === false){
	let card = getRandomNumber()
	sum += card
	cards.push(card)
	renderGame()
	
}
}
