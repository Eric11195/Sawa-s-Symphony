import RewardImages from "../UIelems/rewardImages.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
import { InstrumentsLeft, ArtifactsLeft, UpgradesLeft } from "./RewardsLeft.js";
import artifactList from "../DataDumpFiles/artifacts.js";
import { SHELL_UPDATE_EVENT } from "../UIelems/shellDisplay.js";

export default class Reward{
    numberOfRewards;
    rewardClass;
    choicesIndexes = [];
    choicesImages = [];
    player;
    separationBetweenImages = 125;

    constructor(scene, position, rewardClass, numberOfRewards, player){
        this.numberOfRewards = numberOfRewards;
        this.rewardClass = rewardClass;
        this.player = player;
        this.scene = scene;
        switch (rewardClass){
            case RewardClass.instrument:
                //console.log(InstrumentsLeft);
                this.remainingitems = InstrumentsLeft;
                break;
            case RewardClass.upgrade:
                this.remainingitems = UpgradesLeft;
                break;
            case RewardClass.artifact:
                this.remainingitems = ArtifactsLeft;
                break;
        }
        this.background = scene.add.rectangle( position.x, position.y, numberOfRewards*(100 + this.separationBetweenImages/3), 150, 0xe69138).setOrigin(0.5);
        for (let i = 0; i<numberOfRewards; i++){
            this.choicesIndexes.push(this.randomInst(this.remainingitems));
            let index = this.clicOnRewardFunc(this.choicesIndexes[i]);
            this.choicesImages.push(new RewardImages(scene, this.getImagePositionX(position.x,i,numberOfRewards), position.y, this.choicesIndexes[i], rewardClass).setInteractive().on("pointerdown", index, this));
        }


        //provisional cambiar por la variable que sea cuando Oscar haga merge
        this.cost = 1;
    }

    clicOnRewardFunc(index){
        return function(){
            for(let i = 0; i < this.choicesIndexes.length; i++){
                this.choicesImages[i].PrepareToBeErased();
                this.choicesImages[i].destroy();
            }
            console.log(this.player);
            this.player.Equip(index,this.rewardClass,this.scene);
            this.background.destroy();

            //Elimina el index escogido de la lista
            this.choicesIndexes.splice(this.choicesIndexes.indexOf(index),1);

            //this.player.AddShells();
            this.scene.events.emit(SHELL_UPDATE_EVENT, -this.cost);
        }
    }

    destroyReward(){
        for(let i = 0; i < this.choicesIndexes.length; i++){
            this.choicesImages[i].PrepareToBeErased();
            this.choicesImages[i].destroy();
        }
        this.background.destroy();
    }

    randomInst(remainingitems){
        let index;
        do{
            index = Math.floor(Math.random() * (remainingitems.length));
        }while(this.choicesIndexes.includes(index));
        return index;
    }

    getImagePositionX(startPosX,index, numberOfImages){
        return (startPosX + this.separationBetweenImages * (index - (numberOfImages-1)/2));
    }

}