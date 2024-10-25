
import CombatScene from "./combatScene.js";
export default class mainmenu extends Phaser.Scene
{
    init()
    {
        console.log("1");
     
        
    }
    preload()
    {
        this.load.image("sawa", "./assets/img/fathomgames500px.png");
        
    }
    create() {
        const sprite = this.add.sprite(600,300,"sawa").setInteractive();
        sprite.on('pointerdown',()=>
            {
                console.log(2);
                this.scene.start("combatScene",{ num:1});
            })
        
    }
    update()
    {
        
            
        
    }
  
     
    
}