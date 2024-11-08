
import Mainmenu from "./mainMenu.js";
import testEnemy from "../DataDumpFiles/Enemies/testEnemy.js";
export default class preloader extends Phaser.Scene
{
    constructor(){

        super({key: "preloader"});
 
       

    }
    init()
    {
        //console.log("1");
     
        
    }
    preload()
    {
        //this.load.image("loading", "./assets/img/loading.png");
        const progress = this.add.graphics();
        this.load.on('progress', value =>
            {
    
                progress.clear();
                progress.fillStyle(0xffffff, 1);
                progress.fillRect(0, 270, 800 * value, 100);
    
            });
            this.load.on('complete', () =>
                {
        
                    this.scene.start("mainMenu",{ num:1});
        
                });
                this.load.image("sawa", "./assets/img/fathomgames500px.png");
                this.load.audio('currentCombatSong', [ (testEnemy.songPath+'.ogg'), (testEnemy.songPath+'.mp3'), (testEnemy.songPath+'.m4a') ]);
                this.load.image(testEnemy.name, testEnemy.imagePath);
                this.load.image("fondo", "./assets/img/IlustracionCombatZoneProvisional_LRhythm.jpg");
                this.load.image("sawa", "./assets/img/fathomgames500px.png");
                this.load.image("clock", "./assets/img/discord.png");
                this.load.image("rhythmMarker", "./assets/img/rhythmMarker.png");
                this.load.image("vsMarker", "./assets/img/vsMarker.png");
        
                this.load.image("Flauta", "./assets/img/flauta.png");
                this.load.image("Piano", "./assets/img/piano.png");
               
                this.load.image("sostenuto", "./assets/img/sostenuto.png");
        
                this.load.spritesheet('notes', 'assets/img/notasSpriteSheet.png', {frameWidth: 32, frameHeight: 32});
        
    }
    create() 
    {

    }
    update()
    {
        
            
        
    }
  
     
    
}