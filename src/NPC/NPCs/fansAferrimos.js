import NpcClass from "../npcClass.js";
import Reward from "../../Rewards/reward.js";
import RewardClass from "../../DataDumpFiles/RewardClass.js";
import { windowWidth, windowHeight } from "../../Utils/screenPositions.js";


//Añadir que salgan siempre después de salir la 1era vez
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
        this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:windowHeight()/2}, RewardClass.upgrade, 3, this.player));
        
        this.SpawnReturnButton();
    }
}