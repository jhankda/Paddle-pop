import * as ex from 'excalibur'

const Resources  = {
    ball: new ex.ImageSource('./assets/ball.png'),
    paddle: new ex.ImageSource('./assets/paddle.png'),
    background: new ex.ImageSource('./assets/background.png'),
    djin: new ex.ImageSource('./assets/djin.png'),
}

const loader = new ex.Loader()
loader.suppressPlayButton = true;

for(let res in Resources){
    loader.addResource(Resources[res])
}

export {loader, Resources}