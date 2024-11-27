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
        clockInstance.eventEmitter.on("BeatNow", this.ChargeNextBeatActions,this);

        scene.physics.add.existing(this);
        console.log(enemyData.height);
        this.body.setSize(30, enemyData.height*30, true);

        clockInstance.eventEmitter.on("BeatNow", this.BeatFunction,this)
    }

    ChargeNextBeatActions(){
        for(let i = 0; i < this.enemyActions[this.enemyActionIndex].length; i++){
            this.enemyActions[this.enemyActionIndex][i](this);
        }
        this.enemyActionIndex++;
        //console.log(this.enemyActionIndex, " == ", this.enemyActions.length);
        if(this.enemyActionIndex == this.enemyActions.length) {
            clockInstance.eventEmitter.removeListener("BeatNow", this.ChargeNextBeatActions,this);
            //Fin del nivel
        }
            
    }

    BeatFunction(){
        if(this.earworm > 0){
            this.scene.AddPointsToPlayer(this.earworm);
            this.earworm = Math.floor(this.earworm/2);
        }
    }
}