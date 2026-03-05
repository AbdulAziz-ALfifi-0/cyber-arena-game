class Particle{

constructor(x,y){

this.x = x
this.y = y

this.vx = (Math.random()-0.5)*4
this.vy = (Math.random()-0.5)*4

this.life = 40

}

draw(){

ctx.fillStyle="orange"

ctx.fillRect(this.x,this.y,3,3)

}

update(){

this.x += this.vx
this.y += this.vy

this.life--

}

}
