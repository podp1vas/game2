let playerName = prompt('Введіть ім\'я') || 'Користувач'
document.getElementById('player-name').textContent = playerName
let attempts = 0
const maxAttempts = 3
let playerScore = 0
let cpuScore = 0
const valueMap = { '6':6,'7':7,'8':8,'9':9,'10':10,'J':2,'Q':3,'K':4,'A':11 }
const ranks = Object.keys(valueMap)
const suits = ['♠','♥','♦','♣']
const generateBtn = document.getElementById('generate')
const attemptsEl = document.getElementById('attempts')
const playerScoreEl = document.getElementById('player-score')
const cpuScoreEl = document.getElementById('cpu-score')
const playerCardEl = document.getElementById('player-card')
const cpuCardEl = document.getElementById('cpu-card')
const messageEl = document.getElementById('message')
function pickCard(){
const rank = ranks[Math.floor(Math.random()*ranks.length)]
const suit = suits[Math.floor(Math.random()*suits.length)]
return {rank,suit,value:valueMap[rank]}
}
function showCard(el,card){
el.querySelector('.card-top').textContent = card.rank + card.suit
el.querySelector('.card-center').textContent = card.rank
el.querySelector('.card-bottom').textContent = card.suit + card.rank
}
function endGame(){
generateBtn.disabled = true
if(playerScore>cpuScore){
messageEl.textContent = playerName + ' переміг!'
} else if(cpuScore>playerScore){
messageEl.textContent = 'Комп\'ютер переміг!'
} else {
messageEl.textContent = 'Нічия'
}
}
generateBtn.addEventListener('click',()=>{
if(attempts>=maxAttempts) return
attempts++
attemptsEl.textContent = `Спроба ${attempts} з ${maxAttempts}`
const pCard = pickCard()
const cCard = pickCard()
playerScore += pCard.value
cpuScore += cCard.value
playerScoreEl.textContent = playerScore
cpuScoreEl.textContent = cpuScore
showCard(playerCardEl,pCard)
showCard(cpuCardEl,cCard)
if(attempts===maxAttempts) endGame()
})