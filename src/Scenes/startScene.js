import Player from "../BoardUnits/player.js";
import Reward from "../Rewards/reward.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
import { MidscreenX, MidscreenY } from "../Utils/screenPositions.js";
export default class StartScene extends Phaser.Scene{
    player;
    startReward;
    constructor(){
        super({key: "startScene"});
    }
    preload(){
    }
    create(){
        this.player = new Player(this).setVisible(false);
        this.add.text(200,100, `Todo lo que eres. Menos de lo que serás.`,{fontFamily:"Grandstander",fontSize:"48px"}).setTint(0xe69138);
        this.startReward = new Reward(this,{x:MidscreenX(), y:MidscreenY()-50}, RewardClass.instrument, 1, this.player, false, 0);
        this.add.image(MidscreenX(),500, "NextBattleButton").setDisplaySize(200,200).setInteractive().on("pointerdown", this.StartCombatScene, this);
    }   
    StartCombatScene(){
        if (this.startReward.choice) 
            this.scene.start("combatScene",{player:this.player,enemyIndex:0});
    }
    //this.scene.start("combatScene",{ enemyIndex:0});
}