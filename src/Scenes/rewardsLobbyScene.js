import NPC from "../NPC/npcClass.js";

export default class rewardsLobbyScene extends Phaser.Scene{

    constructor(){
        super({key: "rewardsLobbyScene"});
    }

    init(data){

    }

    preload(){
        this.load.image("NextBattleButton", "./assets/img/NextBattleButton.png");
        this.load.image("jose", "./assets/img/jose.png");
        this.load.image("joseFondo", "./assets/img/joseFondo.png");
        this.load.image("returnButton", "./assets/img/returnButton.png");
    }

    create(){
        this.nextBattleButton = this.add.image(1150,360, "NextBattleButton").setDisplaySize(200,200).setInteractive().on("pointerdown", this.LoadBattleScene, this);

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


    LoadBattleScene(){
        this.scene.start("combatScene", {Player:this.player});
    }


}