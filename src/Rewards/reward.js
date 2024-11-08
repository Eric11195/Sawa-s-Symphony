import RewardImages from "../UIelems/rewardImages.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
export default class Reward{
    numberOfRewards;
   rewardClass;
   choicesIndexes = [];
   choicesImages = [];
   player;
   separationBetweenImages = 125;

    constructor(scene, position, rewardClass, numberOfRewards, player, remainingitems){
        this.numberOfRewards = numberOfRewards;
        this.rewardClass = rewardClass;
        this.player = player;
        this.scene = scene;
        /*switch (rclass){
            case RewardClass.instrument:
                break;
            case RewardClass.upgrade:
                break;
            case RewardClass.artifact:
                break;
        }*/
        for (let i = 0; i<numberOfRewards; i++){
            this.choicesIndexes.push(this.randomInst(remainingitems));
            let index = this.clicOnRewardFunc(this.choicesIndexes[i]);
            this.choicesImages.push(new RewardImages(scene, this.getImagePositionX(position.x,i,numberOfRewards), position.y, this.choicesIndexes[i], rewardClass).setInteractive().on("pointerdown", index, this));
        }
    }

    clicOnRewardFunc(index){
        return function(){
            for(let i = 0; i < this.choicesIndexes.length; i++){
                this.choicesImages[i].PrepareToBeErased();
                this.choicesImages[i].destroy();
            }
            this.player.Equip(index,this.rewardClass,this.scene);


            //Elimina el index escogido de la lista
            this.choicesIndexes.splice(this.choicesIndexes.indexOf(index),1);

        }
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