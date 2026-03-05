class Player{

constructor(){

this.x = canvas.width/2
this.y = canvas.height/2

this.size = 40
this.speed = 5

this.health = 100

}

draw(){

ctx.fillStyle="cyan"

ctx.fillRect(this.x,this.y,this.size,this.size)

}

update(){

if(keys["ArrowLeft"]) this.x -= this.speed
if(keys["ArrowRight"]) this.x += this.speed
if(keys["ArrowUp"]) this.y -= this.speed
if(keys["ArrowDown"]) this.y += this.speed

if(keys[" "]) shoot()

}

upgrade(){

this.speed += 0.5

}

}
