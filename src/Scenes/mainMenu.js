
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
        this.load.image("sawa", "./assets/img/fathomgames500px.png");
        
    }
    create() {
        const sprite = this.add.sprite(600,300,"sawa").setInteractive();
        sprite.on('pointerdown',()=>
            {
                //console.log(2);
                this.scene.start("combatScene",{ enemyIndex:0});
            })
        
    }
    update()
    {
        
            
        
    }
  
     
    
}