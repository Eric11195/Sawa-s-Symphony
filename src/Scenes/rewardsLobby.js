import NPC from "../NPC/npcClass";

export default class rewardsLobby extends Phaser.Scene{
    constructor(){
        super({key: "rewardsLobby"});
    }

    init(){

    }

    preload(){
        this.load.image("jose", "./assets/img/jose.png");
    }

    create(){
        this.testNPC = new NPC(this,
            {
                name: jose,
                posX: 400,
                posY: 400,
            }
        );
    }
 
}