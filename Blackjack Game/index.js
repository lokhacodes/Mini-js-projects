

let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")
let player = {
    name : "Per",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    //A=11 for this game
    //J,Q,K = 10
    let randomCard =  Math.floor(Math.random()*13) + 1
    if (randomCard===1){
        return 11
    }
    else if (randomCard >10){
        return 10
    }
    else {
        return randomCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard= getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
   // cardsEl.textContent = "Cards: " + cards
   cardsEl.textContent = "Cards: " 
    for  ( let i=0; i<cards.length; i++ ){
        cardsEl.textContent += cards[i] + " "
    }
   sumEl.textContent = "Sum: " + sum
   if ( sum<21 )
    {
       message="Do u want to draw new card ? 🙂"  
    } else if (sum === 21){
        message= "Wohoo! You've got Blackjack 🥳"
        hasBlackJack = true
    } else if (sum > 21){
        message="U are out of the Game ! 😭"
        isAlive = false
    }
    messageEl.textContent = message
    
}



function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let nwCard = getRandomCard()
        cards.push(nwCard)
        sum += nwCard
        renderGame()
}

}
