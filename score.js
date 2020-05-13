export default class Score {

    constructor(game) {
        this.game = game;
        this.alive = true;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.counter = 1;
        this.speedFactor = this.counter/1000000;
        this.width = 80;
        this.height = 50;
        this.txtCol = '#E602E9'
        this.txtFont = '20px "Press Start 2P"'
        this.txtCon = "Score: "
        this.again = "";
        this.colorTime = 0
        this.position = {
            x: 50,
            y: 50,
        }
    }
    
    

    draw(ctx) {
            
        ctx.fillStyle = '#00FA9A'
        ctx.font = '27px "Press Start 2P"'
        ctx.fillText(this.again,this.position.x -25 ,this.position.y + 40)
        ctx.strokeText(this.again,this.position.x -25 ,this.position.y + 40)
        ctx.font = this.txtFont
        ctx.fillStyle = this.txtCol
        ctx.fillText(this.txtCon + Math.floor(this.counter),this.position.x,this.position.y)
        ctx.strokeText(this.txtCon + Math.floor(this.counter),this.position.x,this.position.y)
        
    }
    update(deltaTime) {
        if (!deltaTime) return
        this.counter +=  0.1 / 1
        this.speedFactor = this.counter * 0.01
        if (this.txtCol === "#FFF700" || this.txtCol === "#FF0000"){
            this.colorTime++
        }
        if(this.colorTime > 40){
            this.game.corona.scored = false
            this.game.alco.scored = false
            this.txtFont = '20px "Press Start 2P"'
            this.txtCol = '#E602E9'
            this.colorTime = 0
        }
        
        if(this.counter < 0) this.alive = false
        // console.log(this.counter)

    }

   



} 
