class Bullet{

constructor(x,y){

this.x = x
this.y = y

this.size = 6
this.speed = 9

}

draw(){

ctx.fillStyle="yellow"

ctx.fillRect(this.x,this.y,this.size,this.size)

}

update(){

this.y -= this.speed

}

}

function shoot(){

bullets.push(

new Bullet(

player.x + player.size/2,
player.y

)

)

}
