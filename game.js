import * as ex from 'excalibur'
import { loader } from './loader.js';

import { game } from "./main.js";
import { background } from './background.js';

import { makebrick } from './bricks.js';


import { paddle } from "./paddle.js";
import { ball } from './ball.js';


const startgame = ()=>{
    
    game.add(background)
    makebrick()
    game.add(ball)
    game.add(paddle)
    game.start(loader);

}

export {startgame}

startgame()