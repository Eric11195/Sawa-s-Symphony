
import CombatScene from "./combatScene.js";
export default class mainmenu extends Phaser.Scene
{
    constructor(){

        super({key: "mainMenu"});
 
       

    }
    init()
    {
        //console.log("1");
     
        
    }
    preload()
    {
        this.load.image("play", "./assets/img/play_button.png");
        
        
    }
    create() {
        const background =this.add.sprite(0,0,"menufondo").setDisplaySize(2700,1500);
        const title= this.add.sprite(650,100,"title");
        const sprite = this.add.sprite(650,500,"play").setInteractive().setDisplaySize(1100,1100);
        sprite.depth=1;
        sprite.on('pointerdown',()=>
            {
                //console.log(2);
                this.scene.start("combatScene",{ num:1});
            })
        
    }
    update()
    {
        
            
        
    }
  
     
    
}