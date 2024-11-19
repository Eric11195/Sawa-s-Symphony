import NpcClass from "../npcClass.js";
import Reward from "../../Rewards/reward.js";
import RewardClass from "../../DataDumpFiles/RewardClass.js";
import { windowWidth, windowHeight } from "../../Utils/screenPositions.js";
import FlappyBird from "../minigamesFiles/flappyBird.js";
import { AddShells, currentShells } from "../../Rewards/RewardsLeft.js";
import { SHELL_UPDATE_EVENT } from "../../UIelems/shellDisplay.js";


//Añadir que salgan siempre después de salir la 1era vez
export default class toxicFan extends NpcClass{
    posX = 400;
    posY = 400;
    knifesThrown = 0;
    constructor(scene, player){
        super(scene,1000,200, "toxicFan", player);
        this.dialogo = [`Eres una basura
retirate del torneo`,
"Como que no??",
"Ahora verás!",
`Clic Anywhere 
to Jump`];
        this.scale = 0.3;
    }

    TalkToNPC(){
        super.TalkToNPC();
        //this.rewards.push(new Reward(this.scene,{x:(3/4)*windowWidth(), y:windowHeight()/2}, RewardClass.upgrade, 3, this.player));
        for(let i = 1; i < 3; i++){
            this.scene.time.addEvent({delay:1500*i,callback:this.NextDialogue, callbackScope:this});
        }
        this.scene.time.addEvent({delay:3200, callback:function(){
            this.startMinigame();
            this.NextDialogue();
        }, callbackScope:this});
        //this.SpawnReturnButton();
    }

    startMinigame(){
        //flappy bird
        console.log(windowWidth()*3/4, " ", windowHeight()/6);
        this.flappyFondo = this.scene.add.rectangle(windowWidth()/2, windowHeight()/12, 7*windowWidth()/8, (7/8)*windowHeight(), 0x179bae).setOrigin(0,0);
        //this.flappyFondo.depth = 6;
        this.flappyBird = new FlappyBird(this.scene,windowWidth()*2.3/4, windowHeight()/6);
        //this.flappyBird.depth = 100;
        
        this.knifes = this.scene.physics.add.group({
            defaultKey: 'knife'
        });

        let myBool = true;
        for(let i = 100 + windowWidth()/2; i < windowWidth(); i = i + 100){
            this.knifes.create(i, 11*windowHeight()/12).setDisplaySize(100,100).setFlipY(true).setFlipX(myBool).body.setSize(15,10,true);
            this.knifes.create(i, 1.5*windowHeight()/12).setDisplaySize(100,100).setFlipX(!myBool).body.setSize(15,10,true);
            myBool = !myBool;
        }

        this.myClockEvent = this.scene.time.addEvent({delay:1500, callback:this.ThrowKnife, callbackScope: this, repeat:12});

        this.scene.physics.add.overlap(this.flappyBird, this.knifes, (player, knife) =>
            {
                this.endGame(false);
            });
    }


    ThrowKnife(){
        if(this.knifesThrown == 12){
            this.endGame(true);
        }else if(this.knifesThrown <=10){
            let myRandom = windowHeight/2 * Math.random();
            this.knifes.create(100+windowWidth(), windowHeight()/6 + (windowHeight()/2)*Math.random()).setDisplaySize(100,100).setFlipY(true).setFlipX(true).body.setSize(15,10,true).setVelocityX(-300);
            this.knifes.create(100+windowWidth(), windowHeight()/3 + (windowHeight()/2)*Math.random()).setDisplaySize(100,100).setFlipY(false).setFlipX(true).body.setSize(15,10,true).setVelocityX(-300);    
        }
        this.knifesThrown++;
    }

    endGame(completado){
        this.knifes.clear(true,true);
        this.flappyBird.Die();
        this.flappyFondo.destroy();
        this.myClockEvent.destroy();
        if(!this.superado){
            this.superado = true;
            if(completado){
                this.scene.events.emit(SHELL_UPDATE_EVENT, 50);
                console.log("win");
                this.npcDialogue.text = `Mi cartera! ,
Esto no acaba así`;
                //Ganas dinero
            }else{
                this.scene.events.emit(SHELL_UPDATE_EVENT, -currentShells);
                console.log("loose");
                this.npcDialogue.text = `Pringao, me llevaré
tu cartera como advertencia`;
                //Pierdes todo tu dinero
            }
            this.scene.time.addEvent({delay:1500,callback:this.CloseNPCMenu, callbackScope:this});
            //Dice el último dialogo y se cierra solo la pestaña
        }
    }

}