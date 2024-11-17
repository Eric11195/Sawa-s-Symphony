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
    baseprice = 10;

    constructor(scene, position, rewardClass, numberOfRewards, player, remainingitems, paid = false){
        this.numberOfRewards = numberOfRewards;
        this.rewardClass = rewardClass;
        this.player = player;
        this.scene = scene;
        this.paid = paid;
        /*switch (rclass){
            case RewardClass.instrument:
                break;
            case RewardClass.upgrade:
                break;
            case RewardClass.artifact:
                break;
        }*/
        this.background = scene.add.rectangle( position.x, position.y, numberOfRewards*(100 + this.separationBetweenImages/3), 160, 0xe69138).setOrigin(0.5);
        for (let i = 0; i<numberOfRewards; i++){
            this.choicesIndexes.push(this.randomInst(remainingitems));
            let price = 0;
            if (paid) price = this.randomPrice(); 
            let index = this.clicOnRewardFunc(this.choicesIndexes[i], price);
            this.choicesImages.push(new RewardImages(scene, this.getImagePositionX(position.x,i,numberOfRewards), position.y, this.choicesIndexes[i], rewardClass, price).setInteractive().on("pointerdown", index, this));
        }
    }

    clicOnRewardFunc(index,price){
        return function(){
            if (this.player.GetShells()>=price){
                for(let i = 0; i < this.choicesIndexes.length; i++){
                    if (this.paid) this.choicesImages[i].RemoveShellUI();
                    this.choicesImages[i].PrepareToBeErased();
                    this.choicesImages[i].destroy();
                }
                //console.log(this.player);
                this.player.Equip(index,this.rewardClass,this.scene);
                this.player.AddShells(-price);
                this.background.destroy();

                //Elimina el index escogido de la lista
                this.choicesIndexes.splice(this.choicesIndexes.indexOf(index),1);
            }
            else{} //TODO: Mensaje de conchas insuficientes

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
    randomPrice(){
        let extra = Math.floor(Math.random()*10); //TODO: Añadir escalado por nivel
        return this.baseprice+extra;
    }
}