import InstrumentDataBase from "./instrumentDataBase";
import Player from "./player";
import Reward from "./reward";
/*Escena de Phaser*/
export default class RewardsScene extends Phaser.Scene {
    // Array que contiene los instrumentos del jugador, así como los que ha eliminado de su colección.
    ownedinstruments;
    // Array que contiene los instrumentos ya otorgados.
    rewards;

    currentplayer;

    // Conchas base obtenidas por completar un nivel.
    baseshells;
    // Conchas adicionales basadas en la dificultad.
    extrashells;

    init(data){
        this.currentplayer = data.Player;
        
        //Conchas
        this.currentplayer.shells += baseshells + (data.difficulty*extrashells);

        //Instrumentos
        this.rewards = [];
        this.rewardSprites = [];
        this.CreateRewards();
    }
    preload(){
        for (inst = 0; inst<InstrumentDataBase.length(); inst++){
            this.load.image("inst_"+inst, "./assets/img/instrumentos/inst_"+inst+".png");
        }
    }
    create(){
        this.ownedinstruments = [0];
    }
    update(){
    }

    CreateRewards(){
        for (let i = 0; i<3; i++) {
            let newinst = this.RandomInstrument();
            this.rewards.push(newinst);
            this.rewardSprites.push(new Reward(this,{x: i*this.game.scale.width/3, y: 0},"inst_"+newinst).setInteractive());
        }
        for (let i = 0; i<3; i++){
            this.rewardSprites[i].on("pointerdown", this.ChooseInstrument(i));
        }
    }
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
    
    RandomInstrument = function(){
        let instruments = InstrumentDataBase.length();
        if (instruments < ownedinstruments.length() + rewards.length()){
            let inst = Math.floor(Math.random() * (instruments));
        
            return((ContainsInstrument(inst,ownedinstruments) || ContainsInstrument(inst,rewards)) ? RandomInstrument() : inst);
        }
    }

    Select = function(inst){
        let instindex;
        if (inst>=0){
            instindex = this.rewards[i];
        }
        for (let i = 0; i<3; i++){
            this.rewardSprites[i].destroy();
        }
        return instindex;
    }
    
    ChooseInstrument = function(inst){
        let instrument = this.Select(inst);
        this.ownedinstruments.push(instrument);

        
    }
}
function ContainsInstrument(inst, array){   
    let found = false;
    let i = 0;
    while (i<array.length() && !found) {
        found = inst == array[i];
        i++;
    }
    return found;
}
