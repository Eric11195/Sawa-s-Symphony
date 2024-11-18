import NpcClass from "../npcClass.js";
import Reward from "../../Rewards/reward.js";
import RewardClass from "../../DataDumpFiles/RewardClass.js";
import { windowWidth, windowHeight } from "../../Utils/screenPositions.js";

//añadir que la 2a vez que salga se enfade contigo y tenga un minijuego si le das a no aceptar
//La 1era vez te da una recompensa, la 2a te da a elegir entre un artefacto que buffa y debuffa o no cogerlo
//Si no lo coges pasa el minijuego PvZ o algo así
export default class managerEstirado extends NpcClass{
    posX = 400;
    posY = 400;
    constructor(scene, player){
        super(scene,600,200, "managerEstirado", player);
        this.dialogo = [`Te sonará el grupo
nyan nyan Subacuatico`,
`Esta es mi tarjeta de 
contacto, considéralo...`,
`Y Esto es un obsequio
de mi parte`, 
"Sé que eligirás bien"];
//Se ve la tarjeta junto con una reward
        this.scale = 0.4;
    }

    TalkToNPC(){
        super.TalkToNPC();
        //Poner 2 cronos, 1 para cambiar el txt, y el siguiente para la tarjeta y lo otro
            //this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:windowHeight()/2}, RewardClass.instrument, 1, this.player));

        this.scene.time.addEvent({delay:2000,callback:this.Next1, callbackScope:this});
    }

    Next1(){
        this.NextDialogue();
        this.scene.time.addEvent({delay:250,callback:function(){
            this.contactCard = this.scene.add.image((3/4)*windowWidth(), -100, 'tarjetaContacto').setDisplaySize(300,200);
            console.log(this.contactCard);
            this.scene.tweens.add({targets:this.contactCard, y:windowHeight()/3, duration:1000, ease:'Linear', getEnd: function(){console.log("finished")}});
            this.Next2();
            //cardMovementTween.onComplete.add(function(){console.log(contactCard.y)});
        }, callbackScope:this});
    }
    Next2(){
        this.scene.time.addEvent({delay:1500, callback:function(){
            this.NextDialogue();
            this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:(3/4)*windowHeight()}, RewardClass.instrument, 1, this.player));
            this.SpawnReturnButton();
            this.Next3();
        }, callbackScope: this})
    }
    Next3(){
        this.scene.time.addEvent({delay:1500, callback:function(){
            this.NextDialogue();
        }, callbackScope: this})
    }

    CloseNPCMenu(){
        super.CloseNPCMenu();
        this.contactCard.destroy();
    }
}