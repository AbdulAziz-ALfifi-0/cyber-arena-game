const keys = {}

document.addEventListener("keydown", (e)=>{
keys[e.key] = true
})

document.addEventListener("keyup", (e)=>{
keys[e.key] = false
})

const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let player
let enemies = []
let bullets = []
let particles = []
let powerUps = []

let score = 0
let level = 1
let xp = 0
let wave = 1

let frame = 0
let gameRunning = false

function initGame(){

player = new Player()

score = 0
level = 1
xp = 0

enemies = []
bullets = []
particles = []
powerUps = []

gameRunning = true

gameLoop()

}

function spawnEnemy(){

if(frame % (100 - level*5) === 0){

enemies.push(new Enemy())

}

}

function updateEntities(){

player.update()

bullets.forEach(b=>b.update())

enemies.forEach(e=>e.update())

particles.forEach(p=>p.update())

powerUps.forEach(p=>p.update())

}

function drawEntities(){

player.draw()

bullets.forEach(b=>b.draw())

enemies.forEach(e=>e.draw())

particles.forEach(p=>p.draw())

powerUps.forEach(p=>p.draw())

}

function levelSystem(){

if(xp > level*100){

level++

player.upgrade()

}

}

function gameLoop(){

if(!gameRunning) return

ctx.clearRect(0,0,canvas.width,canvas.height)

spawnEnemy()

updateEntities()

drawEntities()

levelSystem()

updateUI()

frame++

requestAnimationFrame(gameLoop)

}

document.getElementById("startBtn").onclick=()=>{

document.getElementById("menu").style.display="none"

initGame()

}
