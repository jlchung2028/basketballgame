let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let currentHomeScore = 0
let currentGuestScore = 0

function addOne(){
    currentHomeScore += 1
    homeScore.textContent = currentHomeScore
}

function addTwo(){
    currentHomeScore += 2
    homeScore.textContent = currentHomeScore
}

function addThree(){
    currentHomeScore += 3
    homeScore.textContent = currentHomeScore
}

function addOneGuest(){
    currentGuestScore += 1
    guestScore.textContent = currentGuestScore
}

function addTwoGuest(){
    currentGuestScore += 2
    guestScore.textContent = currentGuestScore
}

function addThreeGuest(){
    currentGuestScore += 3
    guestScore.textContent = currentGuestScore
}