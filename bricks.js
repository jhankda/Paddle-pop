import * as ex from 'excalibur'
import { ball } from './ball.js';
import { game } from './main.js';
import { Resources } from './loader.js';

const padding = 5;
const xoffset = 15;
const yoffset = 20; 
const columns = 20;
const rows = 8;

const brickcolor = [ex.Color.Cyan,ex.Color.DarkGray,ex.Color.Green];

const redius = game.drawWidth / columns - padding - padding / columns; // px
const bricks  = [];

const djinsprite = ex.SpriteSheet.fromImageSource({
    image:Resources.djin,
    grid:{
        rows:2,
        columns:4,
        spriteHeight:32,
        spriteWidth:32
    }

})

const djinAnimation = ex.Animation.fromSpriteSheet(djinsprite, ex.range(0,7),100)


export function makebrick(){

bricks.length = 0;

for(let j=0;j < rows ;j++){
    for(let i =0;i<columns;i++){
        const brick = new ex.Actor({
                x: xoffset + i * (redius + padding) + (j%2)*10  + padding,
                y: yoffset + j * (redius + padding ) ,
                radius: 10,
                color:brickcolor[j % brickcolor.length]
            })
        setTimeout(() => {
            brick.graphics.use(djinAnimation)
        }, j+i);

        bricks.push(brick)
        

    }
}




bricks.forEach(function (brick){
    
    brick.body.collisionType = ex.CollisionType.Active
    
    game.add(brick)


})


}




export {bricks}

