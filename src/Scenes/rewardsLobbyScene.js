import NPC from "../NPC/npcClass.js";

export default class rewardsLobbyScene extends Phaser.Scene{

    constructor(){
        super({key: "rewardsLobbyScene"});
    }

    init(){

    }

    preload(){
        this.load.image("jose", "./assets/img/jose.png");
        this.load.image("joseFondo", "./assets/img/joseFondo.png");
        this.load.image("returnButton", "./assets/img/returnButton.png");
    }

    create(){
        this.testNPC = new NPC(this,
            {
                name: "jose",
                posX: 400,
                posY: 400,
                dialogo: [`¡Miau! 
Soy tu furrillo 
de confianza`]
            }
        );
    }
 
}