import * as ex from 'excalibur'
// import { Actor } from "excalibur"

import { Resources } from "./loader.js"
import { game } from "./main.js"


const paddleSprite = Resources.paddle.toSprite();
const paddle  = new ex.Actor({
    x:150,
    y:game.drawHeight - 40,
    height:20,
    width:150,
    color:ex.Color.Red
    // anchor:(0.5,120)
})
paddle.graphics.use(paddleSprite)

paddle.body.collisionType = ex.CollisionType.Fixed

game.input.pointers.primary.on("move", (evt) => {
    paddle.pos.x = evt.worldPos.x;
  });

export {paddle}