import NpcClass from "../npcClass.js";
import Reward from "../../Rewards/reward.js";
import RewardClass from "../../DataDumpFiles/RewardClass.js";
import { windowWidth, windowHeight } from "../../Utils/screenPositions.js";


//Añadir que salgan siempre después de salir la 1era vez
export default class mechanic extends NpcClass{
    posX = 400;
    posY = 400;
    constructor(scene, player){
        super(scene,200,200, "mechanic", player);
        this.dialogo = [`Want something??`];
        this.scale = 0.5;
    }

    TalkToNPC(){
        if(super.TalkToNPC()){
            this.rewards.push(new Reward(this.scene,{x:(4/8)*windowWidth()+50, y:windowHeight()/2-50}, RewardClass.artifact, 1, this.player,true));
            this.rewards.push(new Reward(this.scene,{x:(5/8)*windowWidth()+50, y:windowHeight()/2-50}, RewardClass.artifact, 1, this.player,true));
            this.rewards.push(new Reward(this.scene,{x:(6/8)*windowWidth()+50, y:windowHeight()/2 -50}, RewardClass.artifact, 1, this.player,true));
            
            this.SpawnReturnButton();
        }
    }
}