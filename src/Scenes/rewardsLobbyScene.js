import NPC from "../NPC/npcClass.js";
import fansAferrimos from "../NPC/NPCs/fansAferrimos.js";
import managerEstirado from "../NPC/NPCs/managerEstirado.js";
import mechanic from "../NPC/NPCs/mechanic.js";
import toxicFan from "../NPC/NPCs/toxicFan.js";
import ShellDisplay from "../UIelems/shellDisplay.js";
import { canBeTalked, canClick } from "../Utils/ClickInhibitor.js";

export default class rewardsLobbyScene extends Phaser.Scene{

    constructor(){
        super({key: "rewardsLobbyScene"});
    }

    init(data){
        //console.log(data.player);
        this.player = data.player;
        console.log(data.enemyIndex);
        this.enemyIndex = data.enemyIndex;
    }

    preload(){
    }

    create(){
        this.shellDisplay = new ShellDisplay(this);

        this.nextBattleButton = this.add.image(1150,360, "NextBattleButton").setDisplaySize(200,200).setInteractive().on("pointerdown", this.LoadBattleScene, this);


        //Adds al NPCs to spawn pool
        this.npcSpawnPool = [fansAferrimos, managerEstirado, toxicFan,mechanic];

        //Spawn all NPCs
        //Por el momento spawnea todos los npcs
        for(let i = 0; i < this.npcSpawnPool.length; i++)
            new this.npcSpawnPool[i](this,this.player);
        //new this.npcSpawnPool[Math.floor(this.npcSpawnPool.length*Math.random())](this,this.player);
    }


    LoadBattleScene(){
        if(canBeTalked){
            this.shellDisplay.PrepareToBeDeleted();
            this.scene.start("combatScene", {player:this.player, enemyIndex: this.enemyIndex});
        }
    }


}