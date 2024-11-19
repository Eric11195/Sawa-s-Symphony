import { canBeTalked, canClick, setCanBeTalked } from "../Utils/ClickInhibitor.js";
import { npcReturnButtonPositionX, npcReturnButtonPositionY, npcDialoguePositionX, npcDialoguePositionY } from "../Utils/screenPositions.js";

export default class npcClass extends Phaser.GameObjects.Image{
    rewards=[];
    /**
     * 
     * @param {*} scene 
     * @param {*} config El objeto de config tiene que tener string name, int posX, int posY, string [] dialogo
     * rewards[] rewards
     */
    constructor(scene, posX,posY,name, player){
        super(scene,posX,posY,name);
        scene.add.existing(this);
        //this.setDisplaySize(100,100);
        this.name = name;
        //this.dialogo = config.dialogo;
        //this.rewards = config.rewards;
        this.currentDialogueIndex = 0;
        this.setInteractive().on(
            "pointerdown",
            this.TalkToNPC,
            this
        );
        this.player = player;
    }

    TalkToNPC(){
        console.log(canBeTalked);
        if(canBeTalked){
            setCanBeTalked(false);
            this.removeInteractive();
            /**@todo hacer que todo el resto de NPC no puedan clicarse*/
            this.fondo = this.scene.add.image(0,0,this.name+"Fondo").setOrigin(0,0).setDisplaySize(1320,720);
            this.npcDialogue = this.scene.add.text(npcDialoguePositionX(), npcDialoguePositionY(),this.dialogo[this.currentDialogueIndex], {fontFamily:"Grandstander",fontSize:"48px"});    
            return true;
        }else
            return false;
        
        //this.SpawnReturnButton();
    }

    NextDialogue(){
        this.currentDialogueIndex++;
        this.npcDialogue.text = this.dialogo[this.currentDialogueIndex];
    }

    CloseNPCMenu(){
        if(canClick){
            setCanBeTalked(true);
            this.fondo.destroy();
            if(this.returnButton)
                this.returnButton.destroy();
            this.npcDialogue.destroy();
            this.preFX.addColorMatrix().grayscale(1);
            for(let i = 0; i < this.rewards.length; i++){
                this.rewards[i].destroyReward();
            }
        }
    }

    SpawnReturnButton(){
        this.returnButton = this.scene.add.image(npcReturnButtonPositionX(),npcReturnButtonPositionY(), "returnButton").setDisplaySize(100,100).setInteractive().on("pointerdown", this.CloseNPCMenu, this);
    }

}