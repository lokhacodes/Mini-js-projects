let homeScore = 0
let guestScore = 0

const homeEl = document.getElementById("home-score")
const guestEl = document.getElementById("guest-score")

function addScore(team, points) {
    if (team === "home") {
        homeScore += points
        homeEl.textContent = homeScore
    } else {
        guestScore += points
        guestEl.textContent = guestScore
    }
    highlightLeader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
    homeEl.classList.remove("leader")
    guestEl.classList.remove("leader")
}

function highlightLeader() {
    homeEl.classList.remove("leader")
    guestEl.classList.remove("leader")

    if (homeScore > guestScore) {
        homeEl.classList.add("leader")
    } else if (guestScore > homeScore) {
        guestEl.classList.add("leader")
    }
}
