import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import artifactList from "../DataDumpFiles/artifacts.js";
import Player from "../BoardUnits/player.js";
import Reward from "../Rewards/reward.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
import { MidscreenX } from "../Utils/screenPositions.js";
import ShellDisplay from "../UIelems/shellDisplay.js";
import { SHELL_UPDATE_EVENT } from "../UIelems/shellDisplay.js";
import { canClick } from "../Utils/ClickInhibitor.js";
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

    //remaininginstruments = [];
    

    player;

    // Conchas base obtenidas por completar un nivel.
    baseshells = 0; //TODO: Concretar valor
    // Conchas adicionales basadas en la dificultad.
    extrashells = 0; //TODO: Concretar valor
    performanceModifier = 0; //TODO: Concretar mecánicas

    init(data){
        this.player = data.player;
        console.log(data.enemyIndex);
        this.enemyIndex = data.enemyIndex;
        //this.ownedinstruments = [];
        //Conchas
        //this.currentplayer.shells += baseshells + (data.difficulty*extrashells);

        //Instrumentos
        this.rewards = [];
        //this.rewardSprites = [];
    }
    preload(){

        this.load.image("Go_To_Lobby_Button", "./assets/img/Go_To_Lobby_Button.png");

        this.load.image("shell","./assets/img/shell.png");

        /*
        for (let inst = 0; inst<InstrumentDataBase.length; inst++){
            this.load.image(InstrumentDataBase[inst].nombre, "./assets/img/instruments/"+InstrumentDataBase[inst].nombre+".png");
        }

        for(let instrumentUpgradesIndex = 0; instrumentUpgradesIndex < InstrumentUpgrades.length; instrumentUpgradesIndex++){
            this.load.image(InstrumentUpgrades[instrumentUpgradesIndex].nombre, "./assets/img/upgrades/" + InstrumentUpgrades[instrumentUpgradesIndex].nombre+".png");
        }
        for(let artifactIndex = 0; artifactIndex < artifactList.length; artifactIndex++){
            this.load.image(artifactList[artifactIndex].nombre, "./assets/img/artifacts/" + artifactList[artifactIndex].nombre+".png");
        }
            */
    }
    create(){
        //this.player.AddShells(this.baseshells+(this.extrashells*this.performanceModifier*this.player.GetLevel()));
        this.shellDisplay = new ShellDisplay(this);
        this.events.emit(SHELL_UPDATE_EVENT, 25);
        //Spawn rewards
        this.CreateRewards(1);


        //Spawn next scene Button
        this.nextSceneButton = this.add.image(1150,360, "Go_To_Lobby_Button").setDisplaySize(200,200).setInteractive().on("pointerdown", this.LoadLobbyScene, this);
    }

    CreateRewards(rewardNumber){
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:rewardNumber*200}, RewardClass.instrument, 4, this.player,true));
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:200*rewardNumber}, RewardClass.upgrade, 3, this.player,true));
        ++rewardNumber;
        this.rewards.push(new Reward(this,{x:MidscreenX(), y:200*rewardNumber}, RewardClass.artifact, 1, this.player,true));
    }


    LoadLobbyScene(){
        if(canClick){
            this.shellDisplay.PrepareToBeDeleted();
            this.scene.start("rewardsLobbyScene", {player:this.player,enemyIndex:this.enemyIndex});
        }
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