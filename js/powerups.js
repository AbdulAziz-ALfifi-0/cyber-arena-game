class PowerUp{

constructor(){

this.x = Math.random()*canvas.width
this.y = -20

this.size = 20
this.speed = 2

}

draw(){

ctx.fillStyle="lime"

ctx.fillRect(this.x,this.y,this.size,this.size)

}

update(){

this.y += this.speed

}

}
