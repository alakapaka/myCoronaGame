export default class InputHandler {

    constructor(player) {
        document.addEventListener("keydown", evnet => {
            switch (event.keyCode) {
                case 37:
                player.moveLeft()
                break; 
                case 38:
                player.moveUp();
                break; 
                case 39:
                    player.moveRight();
                break; 
                case 13:
                    if(player.killed){
                        player.newGame();
                        break;
                    }
                    break;
             
            }
        });
    }
}