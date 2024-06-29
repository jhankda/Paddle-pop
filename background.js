import * as ex from 'excalibur'
import { Resources } from './loader';

const background = new ex.Actor({
    pos: new ex.Vector(400, 300),  // Center of the game
    width: 800,
    height: 600,
    anchor: ex.Vector.Half
  });
  

const backsprite = ex.SpriteSheet.fromImageSource({
image: Resources.background,
grid:{
    rows:3,
    columns:3,
    spriteWidth:800,
    spriteHeight:600
}
})

const backAnimation = ex.Animation.fromSpriteSheet(backsprite, ex.range(0,8), 500);


background.graphics.use(backAnimation)

export {background}