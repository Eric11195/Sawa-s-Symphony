import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import artifactList from "../Upgrades/artifacts.js";
import Player from "../BoardUnits/player.js";
import Reward from "../Rewards/reward.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
import { MidscreenX } from "../Utils/screenPositions.js";
/*Escena de Phaser*/
export default class RewardsScene extends Phaser.Scene {

    constructor(){
        super({key: "rewardsScene"});
        this.instrumentsLeft = [];
        for(let i = 0; i < InstrumentDataBase.length; i++){
            this.instrumentsLeft[i] = i;
        }
        this.artifactLeft = [];
        for(let i = 0; i < artifactList.length; i++){
            this.artifactLeft[i] = i;
        }
    }

    // Array que contiene los instrumentos del jugador, así como los que ha eliminado de su colección.
    ownedinstruments;
    // Array que contiene los instrumentos ya otorgados.
    rewards;

    remaininginstruments = [];
    

    currentPlayer;

    // Conchas base obtenidas por completar un nivel.
    baseshells;
    // Conchas adicionales basadas en la dificultad.
    extrashells;

    init(data){
        this.currentPlayer = data.Player;
        //this.ownedinstruments = [];
        //Conchas
        //this.currentplayer.shells += baseshells + (data.difficulty*extrashells);

        //Instrumentos
        this.rewards = [];
        //this.rewardSprites = [];
    }
    preload(){


        for (let inst = 0; inst<InstrumentDataBase.length; inst++){
            this.load.image(InstrumentDataBase[inst].nombre, "./assets/img/instruments/"+InstrumentDataBase[inst].nombre+".png");
        }

        for(let instrumentUpgradesIndex = 0; instrumentUpgradesIndex < InstrumentUpgrades.length; instrumentUpgradesIndex++){
            this.load.image(InstrumentUpgrades[instrumentUpgradesIndex].nombre, "./assets/img/upgrades/" + InstrumentUpgrades[instrumentUpgradesIndex].nombre+".png");
        }
        for(let artifactIndex = 0; artifactIndex < artifactList.length; artifactIndex++){
            this.load.image(artifactList[artifactIndex].nombre, "./assets/img/artifacts/" + artifactList[artifactIndex].nombre+".png");
        }
    }
    create(){
        this.CreateRewards(1);
        //for (let i = 0; i<InstrumentDataBase.length;i++) this.remaininginstruments.push(i);
    }

    CreateRewards(rewardNumber){
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:rewardNumber*150}, RewardClass.instrument, 2, this.currentPlayer, this.instrumentsLeft));
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:150*rewardNumber}, RewardClass.upgrade, 2, this.currentPlayer, InstrumentUpgrades));
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:150*rewardNumber}, RewardClass.artifact, 2, this.currentPlayer, this.artifactLeft));
    }

    /*
    CreateRewards(){
        for (let i = 0; i<3; i++) {
            let newinst = this.RandomInstrument();
            this.rewards.push(newinst);
            this.rewardSprites.push(new Reward(this,{x: i*this.game.scale.width/3, y: 0},"inst_"+newinst));
        }
        for (let i = 0; i<3; i++){
            //this.rewardSprites[i].on("pointerdown", this.ChooseInstrument(i));
        }
    }
        */
    /*
    CreatePlayerInstruments(inst){
        let playerinsts;
        for (let i = 0; i<3; i++) {
            this.playerinsts.push();
        }
        for (let i = 0; i<3; i++){
            this.playerinsts[i].on("pointerdown", ()=>{
                this.currentplayer.SwapInstruments(inst, i);
            });
        }
    }
        
    


    Select = function(inst){
        let instindex;
        if (inst>=0){
            //instindex = this.rewards[i];
        }
        for (let i = 0; i<3; i++){
            //this.rewardSprites[i].destroy();
        }
        return instindex;
    }
    
    ChooseInstrument = function(inst){
        let instrument = this.Select(inst);
        this.ownedinstruments.push(instrument);

        
    }
    RandomInstrument = function(){
        let instruments = InstrumentDataBase.length;
        if (instruments < this.ownedinstruments.length + this.rewards.length){
            let inst = Math.floor(Math.random() * (instruments));
        
            return((ContainsInstrument(inst,ownedinstruments) || ContainsInstrument(inst,rewards)) ? RandomInstrument() : inst);
        }
    }
        */
}
function ContainsInstrument(inst, array){   
    let found = false;
    let i = 0;
    while (i<array.length && !found) {
        found = inst == array[i];
        i++;
    }
    return found;
}
