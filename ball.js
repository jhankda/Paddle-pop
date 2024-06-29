import * as ex from 'excalibur'
import { game } from './main';
import { paddle } from './paddle';
import { bricks } from './bricks';
import { Resources } from './loader';
import {startgame} from './game.js';

const ballSprite = ex.SpriteSheet.fromImageSource({
    image: Resources.ball,
    grid:{
        rows:2,
        columns:2,
        spriteWidth:20,
        spriteHeight:20
    }
})

const ballAnimation = ex.Animation.fromSpriteSheet(ballSprite, ex.range(0,3), 200);


const ball = new ex.Actor({
    x:100,
    y:300,
    radius:15,
    color: ex.Color.Orange
})

ball.graphics.use(ballAnimation)

const ballspeed = ex.vec(200,300);
setTimeout(()=>{
    ball.vel = ballspeed;
},5000)

ball.body.collisionType = ex.CollisionType.Passive

ball.on("postupdate",() => {
    if(ball.pos.x <ball.width/2){
        ball.vel.x = ballspeed.x;
    }
    if(ball.pos.x + ball.width/2 > game.drawWidth){
        ball.vel.x = ballspeed.x * -1;
    }
    if (ball.pos.y < ball.height / 2) {
        ball.vel.y = ballspeed.y;
      }
    
    
    })


let colliding = false;
let score  = -100;

ball.on('collisionstart' ,function(ev){
    if(bricks.indexOf(ev.other) > -1){
        ev.other.kill();
        score+=100;
    }

    var intersection  = ev.contact.mtv.normalize();

    if(!colliding){
        colliding =  true;
        if(Math.abs(intersection.x) > Math.abs(intersection.y)){
            ball.vel.x *= -1;

        }if (Math.abs(intersection.x) == Math.abs(intersection.y)) {
            ball.vel.x *= -1;
            ball.vel.y *= -1;
        } else {
            ball.vel.y *= -1;
        }
    }


})

ball.on('collisionend',()=>{
    colliding = false;
})    



// Loss condition
ball.on("exitviewport", () => {
    alert("You lose! \n SCORE:::"+score);
    setTimeout(() => {
        game.currentScene.clear();
      startgame()
      setTimeout(()=>{

      },5000)
      ball.pos.y = paddle.pos.y - 30;
      ball.pos.x = paddle.pos.x;
      score=  0;
    
    }, 1000);
  });

export {ball}