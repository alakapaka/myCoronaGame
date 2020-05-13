export default class Misc {

    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.counter = 1
        this.width = 209;
        this.signWidth = 420;
        this.height = 292;
        this.signHeight = 140;
        this.goSign = false;
        this.stopSign = true;
        this.builR = document.getElementById('buil');
        this.builL = document.getElementById('buil');
        this.sign = document.getElementById('sign')
        this.frameSpeed = 30
        this.signFrameSpeed = 30

        this.position = {
            Lx: 0,
            Rx: this.gameWidth - this.width,
            signX: 190,
            startRx: this.gameWidth - this.width,
            startX: this.gameWidth / 2,
            y: 40,
            Sy: -200,
            Ry: 40,
            Ly: 40,
            startY: this.gameHeight / 2,
        }
    }


    draw(ctx) {

        ctx.drawImage(this.builR, this.position.Rx, this.position.Ry)
        ctx.drawImage(this.builL, this.position.Lx, this.position.Ly)
        ctx.drawImage(this.sign, this.position.signX, this.position.Sy, this.signWidth, this.signHeight)

        // ctx.beginPath();
        // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.stroke();    
        // // const gameWidth = 800;
        // // const gameHeight = 600;


    }
    update(deltaTime) {
        this.counter++
        this.frameSpeed += this.frameSpeed * 0.0005
        if (!deltaTime) return
        if (this.counter % 800 === 0) {
           this.goSign = true
           this.stopSign = false
            this.signRun(deltaTime)
        }
        if(!this.stopSign) this.signRun(deltaTime)
        this.position.Rx += this.frameSpeed / deltaTime;
        this.position.Lx -= this.frameSpeed / deltaTime;
        this.position.Ry += this.frameSpeed / deltaTime;
        this.position.Ly += this.frameSpeed / deltaTime;
        if (this.position.Rx > 800 && this.position.Ry > 250) {
            this.position.Rx = this.position.startRx
            this.position.Ry = this.position.Ry = 40
        }
        if (this.position.Lx < -300 && this.position.Ly > 200) {
            this.position.Lx = 0
            this.position.Ly = this.position.Ly = 40

        }
        // console.log(this.position.Lx)
        // console.log("Y:" + this.position.y)


    }

    signRun(deltaTime) {
        if(this.goSign){
            this.position.signX = 190
            this.position.Sy =  150;
            this.signHeight = 140;
            this.signWidth = 420;
            this.goSign = false;
        }
        if (this.signHeight > 200 && this.signWidth < 800) {
            this.signWidth += 125 / deltaTime
            this.position.signX -= 60 /deltaTime
        }
        if (this.signHeight < 700){
            this.position.Sy -= this.signFrameSpeed / deltaTime
            this.signHeight += 100 / deltaTime
            
        }
        if (this.signHeight >= 400 && this.signWidth >= 500)
        {
            this.signHeight += 700 / deltaTime
            this.signWidth += 500 / deltaTime
            this.position.signX -= 200 / deltaTime
            
        }
        
        if(this.signWidth > 950) {
            this.position.Sy += 400 / deltaTime
        }
        
        if (this.position.sy > 2000){
            this.stopSign = true
        }

    }






} 