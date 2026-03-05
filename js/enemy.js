class Enemy{

constructor(){

this.size = 35

this.x = Math.random()*canvas.width
this.y = -50

this.speed = 2 + level*0.3

}

draw(){

ctx.fillStyle="red"

ctx.fillRect(this.x,this.y,this.size,this.size)

}

update(){

this.y += this.speed

if(this.y > canvas.height){

this.y = -50

}

}

}
