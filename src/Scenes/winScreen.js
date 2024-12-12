
import CombatScene from "./combatScene.js";
export default class mainmenu extends Phaser.Scene
{
    constructor(){

        super({key: "winMenu"});
    

    }
    init(data)
    {
        this.win = data.win;
        this.combats = data.nCombats+1;
    }
    preload()
    {        
    }
    create() {
        if(this.win){
            this.add.text(660,100, "You Win",{fontFamily:"Grandstander",fontSize:"128px"}).setOrigin(0.5).setTint(0x179bae);
            this.add.text(460,150, "Vegan Seadrake Defeated",{fontFamily:"Grandstander",fontSize:"32px"}).setTint(0x179bae);
        }
        else{
            this.add.text(660,100, "You Lose",{fontFamily:"Grandstander",fontSize:"128px"}).setOrigin(0.5).setTint(0xe69138);
            this.add.text(520,150, "After Combat -> " + this.combats,{fontFamily:"Grandstander",fontSize:"32px"}).setTint(0x179bae);
        }

        this.add.rectangle(660,375,400,200,0xe69138).setInteractive().on('pointerdown',()=>
            {
                location.reload();
                this.scene.start("mainMenu");
            }
        )
        this.add.text(500,300, `Return To 
Main Menu`,{fontFamily:"Grandstander",fontSize:"64px"});

/*
        this.add.rectangle(970,375,400,200,0x179bae).setInteractive().on('pointerdown',()=>
            {
                this.scene.start("combatScene",{ enemyIndex:0});
            }
        )
        this.add.text(800,350, "Play Again!",{fontFamily:"Grandstander",fontSize:"64px"});
          */      
    }
}