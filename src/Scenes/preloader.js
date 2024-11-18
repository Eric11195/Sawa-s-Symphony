
import Mainmenu from "./mainMenu.js";
import testEnemy from "../DataDumpFiles/Enemies/testEnemy.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import ArtifactDataBase from "../DataDumpFiles/artifacts.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";

import { InstrumentsLeft, ArtifactsLeft, UpgradesLeft } from "../Rewards/RewardsLeft.js";
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
                this.load.image("sostenuto", "./assets/img/sostenuto.png");
                this.load.image("vibrato", "./assets/img/vibrato.png");
        
                this.load.spritesheet('notes', 'assets/img/notasSpriteSheet.png', {frameWidth: 32, frameHeight: 32});
                this.load.image("sawa", "./assets/img/fathomgames500px.png");
                this.load.audio('currentCombatSong', [ (testEnemy.songPath+'.ogg'), (testEnemy.songPath+'.mp3'), (testEnemy.songPath+'.m4a') ]);
                this.load.image(testEnemy.name, testEnemy.imagePath);
                this.load.image("fondo", "./assets/img/IlustracionCombatZoneProvisional_LRhythm.jpg");
                this.load.image("sawa", "./assets/img/fathomgames500px.png");
                this.load.image("clock", "./assets/img/discord.png");
                this.load.image("rhythmMarker", "./assets/img/rhythmMarker.png");
                this.load.image("vsMarker", "./assets/img/vsMarker.png");
        
                //Carga de instrumentos
                for (let inst = 0; inst<InstrumentDataBase.length; inst++){
                    this.load.image(InstrumentDataBase[inst].nombre, "./assets/img/instruments/"+InstrumentDataBase[inst].nombre+".png");
                }
                for (let inst = 0; inst<ArtifactDataBase.length; inst++){
                    this.load.image(ArtifactDataBase[inst].nombre, "./assets/img/artifacts/"+ArtifactDataBase[inst].nombre+".png");
                }
                for(let instrumentUpgradesIndex = 0; instrumentUpgradesIndex < InstrumentUpgrades.length; instrumentUpgradesIndex++){
                    this.load.image(InstrumentUpgrades[instrumentUpgradesIndex].nombre, "./assets/img/upgrades/" + InstrumentUpgrades[instrumentUpgradesIndex].nombre+".png");
                }
                
                this.load.image("sostenuto", "./assets/img/sostenuto.png");
        
                this.load.spritesheet('notes', 'assets/img/notasSpriteSheet.png', {frameWidth: 32, frameHeight: 32});
        

                //Carga de NPCs
                this.load.image("fansAferrimos", "./assets/img/NPCs/fansAferrimos.png");
                this.load.image("managerEstirado", "./assets/img/NPCs/managerEstirado.png");


    }
    create() {
    
        for(let i = 0; i < InstrumentDataBase.length; i++)
            InstrumentsLeft.push(i);
        for(let i = 0; i < ArtifactDataBase.length; i++)
            ArtifactsLeft.push(i);
        for(let i = 0; i < InstrumentUpgrades.length; i++)
            UpgradesLeft.push(i);


    //Animations
    this.anims.create({
        key: 'notes0',
        frames: this.anims.generateFrameNumbers('notes', {start:0, end:0}),
        frameRate: 1,
        repeat: -1
    });
    this.anims.create({
        key: 'notes1',
        frames: this.anims.generateFrameNumbers('notes', {start:1, end:1}),
        frameRate: 1,
        repeat: -1
    });
    this.anims.create({
        key: 'notes2',
        frames: this.anims.generateFrameNumbers('notes', {start:2, end:2}),
        frameRate: 1,
        repeat: -1
    });
}
    update()
    {
        
        
        
    }
  
     
    
}