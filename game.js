import Player from './player.js'
import Bg from './backGround.js'
import InputHandler from './input.js'
import Clouds from './clouds.js'
import Misc from './misc.js'
import Alco from './alco.js'
import Score from './score.js'
import Corona from './corona.js'
import Sound from './sound.js'


export default class Game {



    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

    start() {
        this.score = new Score(this);
        this.bg = new Bg(this);
        this.p1 = new Player(this);
        this.clouds = new Clouds(this);
        this.misc = new Misc(this);
        this.alco = new Alco(this);
        this.corona = new Corona(this);
        this.bgMusic =new Sound("backGround.mp3")
        this.bgMusic.play()
        this.bgMusic.loop = true;
        this.gameObjects = [
            this.bg,
            this.p1 ,
            this.clouds,
            this.misc ,
            this.alco,
            this.score,
            this.corona
        ]

        new InputHandler(this.p1);

    }

    update(deltaTime) {
        if(!this.p1.killed){
        // this.bg.update(deltaTime)
        // this.clouds.update(deltaTime)
        // this.alco.update(deltaTime)
        // this.misc.update(deltaTime)
        // this.p1.update(deltaTime);
        // this.score.update(deltaTime);
        // this.corona.update(deltaTime)
        this.gameObjects.forEach((object) => object.update(deltaTime));
        }
        if(!this.p1.alive){
            this.clouds.update(deltaTime)
            this.p1.update(deltaTime)
        }
    }
    
    draw(ctx) {
        if(!this.p1.killed){
        // this.bg.draw(ctx)
        // this.clouds.draw(ctx)
        // this.alco.draw(ctx)
        // this.misc.draw(ctx)
        // this.p1.draw(ctx)
        // this.score.draw(ctx)
        // this.corona.draw(ctx)
        this.gameObjects.forEach((object) => object.draw(ctx));
    }
    if(this.p1.killed){
        this.bg.draw(ctx)
        this.clouds.draw(ctx)
        this.misc.draw(ctx)
        this.p1.draw(ctx)
        this.score.draw(ctx)
    }
    }

    newGame(){
        this.score.counter = 0;
        this.p1.killed = false;
        this.start();
    }

}
      