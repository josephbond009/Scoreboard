let home1Pt = document.querySelector(".home-1-pt")
let home2Pt = document.querySelector(".home-2-pt")
let home3Pt = document.querySelector(".home-3-pt")
let homeScore = document.querySelector(".home-score")

let guest1Pt = document.querySelector(".guest-1-pt")
let guest2Pt = document.querySelector(".guest-2-pt")
let guest3Pt = document.querySelector(".guest-3-pt")
let guestScore = document.querySelector(".guest-score")

let resetBtn = document.querySelector(".reset-btn")

let homePoint = 0
let guestPoint = 0


function updateScore() {
    homeScore.textContent = homePoint.toString().padStart(2, "0")
    guestScore.textContent = guestPoint.toString().padStart(2, "0")
    scoreColor()
}

function home1Point() {
    homePoint += 1
    updateScore()
}

function home2Point() {
    homePoint += 2
    updateScore()
}

function home3Point() {
    homePoint += 3
    updateScore()
}

function guest1Point() {
    guestPoint += 1
    updateScore()
}

function guest2Point() {
    guestPoint += 2
    updateScore()
}

function guest3Point() {
    guestPoint += 3
    updateScore()
}

function reset() {
    homePoint = 0
    guestPoint = 0
    updateScore()
}

function scoreColor() {
    if (homePoint > guestPoint) {
        homeScore.style.color = "green"
        guestScore.style.color = "red"
    } else if (guestPoint > homePoint) {
        guestScore.style.color = "green"
        homeScore.style.color = "red"
    } else {
        guestScore.style.color = "white"
        homeScore.style.color = "white"
    }
}