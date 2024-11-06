import RewardImages from "../UIelems/rewardImages.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import RewardClass from "../DataDumpFiles/itemClass.js";
export default class Reward{
    numberOfRewards;
   rclass;
   choicesIndexes = [];
   choicesImages = [];
   player;
   separationBetweenImages = 125;

    constructor(scene, position, rclass, numberOfRewards, player, remainingitems){
        this.numberOfRewards = numberOfRewards;
        this.rclass = rclass;
        this.player = player;
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
            this.choicesImages.push(new RewardImages(scene, this.getImagePositionX(position.x,i,numberOfRewards), position.y, this.choicesIndexes[i], rclass).setInteractive().on("pointerdown", index, this));
        }
        //console.log(this.choicesImages);
    }

    clicOnRewardFunc(index){
        return function(){
            /** @todo Do things*/
            //return index;
        }
    }

    randomInst = function(remainingitems){
        let index;
        do{
            index = Math.floor(Math.random() * (remainingitems.length));
        }while(this.choicesIndexes.includes(index));
        return index;
    }

    getImagePositionX(startPosX,index, numberOfImages){
        console.log((index - (numberOfImages-1)/2));
        return (startPosX + this.separationBetweenImages * (index - (numberOfImages-1)/2));
        //return  startPosX + this.separationBetweenImages * index -(this.separationBetweenImages*Math.floor(numberOfImages/2));
    }

}