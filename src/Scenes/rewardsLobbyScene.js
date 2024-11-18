import NPC from "../NPC/npcClass.js";
import fansAferrimos from "../NPC/NPCs/fansAferrimos.js";
import ShellDisplay from "../UIelems/shellDisplay.js";

export default class rewardsLobbyScene extends Phaser.Scene{

    constructor(){
        super({key: "rewardsLobbyScene"});
    }

    init(data){
        console.log(data.player);
        this.player = data.player;
    }

    preload(){
        this.load.image("NextBattleButton", "./assets/img/NextBattleButton.png");
        this.load.image("jose", "./assets/img/jose.png");
        this.load.image("joseFondo", "./assets/img/joseFondo.png");
        this.load.image("returnButton", "./assets/img/returnButton.png");
    }

    create(){
        new ShellDisplay(this);

        this.nextBattleButton = this.add.image(1150,360, "NextBattleButton").setDisplaySize(200,200).setInteractive().on("pointerdown", this.LoadBattleScene, this);


        //Adds al NPCs to spawn pool
        this.npcSpawnPool = [fansAferrimos];

        /*
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
        */

        //Spawn all NPCs
        console.log(this.player);
        new this.npcSpawnPool[Math.floor(this.npcSpawnPool.length*Math.random())](this,this.player);
    }


    LoadBattleScene(){
        this.scene.start("combatScene", {player:this.player});
    }


}