import NpcClass from "../npcClass.js";
import Reward from "../../Rewards/reward.js";
import RewardClass from "../../DataDumpFiles/RewardClass.js";
import { windowWidth, windowHeight } from "../../Utils/screenPositions.js";

export default class fansAferrimos extends NpcClass{
    posX = 400;
    posY = 400;
    constructor(scene, player){
        super(scene,400,400, "fansAferrimos", player);
        this.dialogo = [`¡Sawa quiero 
un hijo tuyo!`];
        this.scale = 0.3;
    }

    TalkToNPC(){
        super.TalkToNPC();
        this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:(1/4)*windowHeight()}, RewardClass.instrument, 1, this.player));
        this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:(2/4)*windowHeight()}, RewardClass.artifact, 1, this.player));
        this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:(3/4)*windowHeight()}, RewardClass.upgrade, 1, this.player));
        
        this.SpawnReturnButton();
    }
}