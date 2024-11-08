import Nota from "../Projectiles/nota.js";
import { clockInstance } from "../Scenes/combatScene.js";
import BoardUnit from './boardUnit.js';

export default class Enemy extends BoardUnit{
    enemyActionIndex;
    enemyActions;

    currentBeatActionIndex;
    /**Hacer un constructor que reciba un objeto de forma similar al de los instrumentos */
    constructor(scene, enemyData){
        super(scene, {x:6,y:enemyData.startPosY}, enemyData.name);
        this.setOrigin();
        this.setDisplaySize(100,100);
        this.enemyActions = enemyData.enemyActions;
        this.enemyActionIndex = 0;
        clockInstance.eventEmitter.on("BeatNow", this.ReworkedChargeNextBeatActions,this);

        scene.physics.add.existing(this);
        this.body.setSize(30, 10, true);
    }

    ReworkedChargeNextBeatActions(){
        for(let i = 0; i < this.enemyActions[this.enemyActionIndex].length; i++){
            this.enemyActions[this.enemyActionIndex][i](this);
        }
        this.enemyActionIndex++;
        if(this.enemyActionIndex == this.enemyActions.length) {
            clockInstance.eventEmitter.removeListener("BeatNow", this.ReworkedChargeNextBeatActions,this);
            //Fin del nivel
        }
            
    }
}