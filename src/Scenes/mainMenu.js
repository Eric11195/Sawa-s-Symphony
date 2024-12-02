
import CombatScene from "./combatScene.js";
export default class mainmenu extends Phaser.Scene
{
    constructor(){

        super({key: "mainMenu"});
 
    

    }
    init(myBool)
    {
    }
    preload()
    {
        //this.load.image("sawa", "./assets/img/fathomgames500px.png");
        
    }
    create() {
        //game.stage.backgroundColor = "0x179bae";
        this.add.rectangle(-10,-10, 3000,3000,0x179bae);
        //this.cameras.main.setBackgroundColor('#0x179bae')
        this.add.text(150,100, `Sawa's Symphony`,{fontFamily:"Grandstander",fontSize:"128px"}).setTint(0xe69138);

        //Play Button
        this.add.rectangle(660,375,400,200,0xe69138).setInteractive().on('pointerdown',()=>
            {
                this.scene.start("combatScene",{ enemyIndex:0});
            }
        )
        this.add.text(590,330, `Play`,{fontFamily:"Grandstander",fontSize:"64px"});

        /*
        const sprite = this.add.sprite(600,300,"sawa").setInteractive();
        sprite.on('pointerdown',()=>
            {
                //console.log(2);
                this.scene.start("combatScene",{ enemyIndex:0});
            })
                */
        
    }
    update()
    {
        
            
        
    }
  
     
    
}