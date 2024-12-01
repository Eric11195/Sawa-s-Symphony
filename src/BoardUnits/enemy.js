import { clockInstance } from "../Scenes/combatScene.js";
import BoardUnit from './boardUnit.js';
import {notasPool} from "../Scenes/combatScene.js"
export default class Enemy extends BoardUnit{
    enemyActionIndex;
    enemyActions;
    currentBeatActionIndex;
    /**Hacer un constructor que reciba un objeto de forma similar al de los instrumentos */
    constructor(scene, enemyData){
        super(scene, {x:6,y:enemyData.startPosY}, enemyData.name);
        /*console.log(enemyData);
        fetch('../../assets/enemyPatron/testEnemy.json')
            .then((response) => response.json())
            .then((json) => console.log(json));
        */
            this.setOrigin();
        this.setDisplaySize(100,100);
        this.enemyActions = enemyData.enemyActions;
        console.log(this.enemyActions);
        this.enemyActionIndex = 0;
        clockInstance.eventEmitter.on("BeatNow", this.ChargeNextBeatActions,this);

        scene.physics.add.existing(this);
        console.log(enemyData.height);
        this.body.setSize(30, enemyData.height*30, true);

        clockInstance.eventEmitter.on("BeatNow", this.BeatFunction,this)
    }

    ChargeNextBeatActions(){
        for(let i = 0; i < 5; i++){
            console.log(this.enemyActions[this.enemyActionIndex][i]);
            if(this.enemyActions[this.enemyActionIndex][i]>=0)
                notasPool.Spawn("nota",6,i,-1,this.enemyActions[this.enemyActionIndex][i]);
        }
        this.Move(0,this.enemyActions[this.enemyActionIndex][5]);
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