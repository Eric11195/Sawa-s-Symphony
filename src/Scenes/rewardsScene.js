import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import artifactList from "../DataDumpFiles/artifacts.js";
import Player from "../BoardUnits/player.js";
import Reward from "../Rewards/reward.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
import { MidscreenX } from "../Utils/screenPositions.js";
import ShellDisplay from "../UIelems/shellDisplay.js";
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

    // Array que contiene los instrumentos ya otorgados.
    rewards;

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
        new ShellDisplay(this,3333);
        this.CreateRewards(1);
        //for (let i = 0; i<InstrumentDataBase.length;i++) this.remaininginstruments.push(i);
    }

    CreateRewards(rewardNumber){
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:rewardNumber*200}, RewardClass.instrument, 4, this.currentPlayer, this.instrumentsLeft));
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:200*rewardNumber}, RewardClass.upgrade, 3, this.currentPlayer, InstrumentUpgrades));
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:200*rewardNumber}, RewardClass.artifact, 2, this.currentPlayer, this.artifactLeft));
    }


    LoadLobbyScene(){
        this.scene.start("rewardsLobbyScene", {Player:this.player});
    }

}
/*
function ContainsInstrument(inst, array){   
    let found = false;
    let i = 0;
    while (i<array.length && !found) {
        found = inst == array[i];
        i++;
    }
    return found;
}
*/