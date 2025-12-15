let firstCard = 11
let secondCard=11
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

if ( sum<21 )
    {
      console.log("Do u want to draw new card ? 🙂")  
    } else if (sum === 21){
        console.log("Wohoo! You've got Blackjack 🥳")
        hasBlackJack = true
    } else if (sum > 21){
        console.log("U are out of the Game ! 😭")
        isAlive = false
    }


console.log(hasBlackJack)
console.log(isAlive)