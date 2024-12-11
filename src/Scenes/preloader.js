
import Mainmenu from "./mainMenu.js";
import testEnemy from "../DataDumpFiles/Enemies/testEnemy.js";
import bossEnemy from "../DataDumpFiles/Enemies/bossenemy.js"
import Violet from "../DataDumpFiles/Enemies/VioletEnemy.js";
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
    }
    
    preload()
    {
        //this.load.image("loading", "./assets/img/loading.png");
        const progress = this.add.graphics();
        this.add.text(460,200, "Loading...",{fontFamily:"Grandstander",fontSize:"48px"});
        this.load.on('progress', value =>
            {
                progress.clear();
                progress.fillStyle(0xffffff, 1);

                progress.fillRect(460, 270, 400 * value, 100);
            });
            this.load.on('complete', () =>
                {
        
                    this.scene.start("mainMenu",{ num:1});
        
                });
                this.load.image("sostenuto", "./assets/img/sostenuto.png");
                this.load.image("vibrato", "./assets/img/vibrato.png");
        
                this.load.spritesheet('notes', 'assets/img/notasSpriteSheet.png', {frameWidth: 32, frameHeight: 32});
                this.load.image("sawa", "./assets/img/fathomgames500px.png");

                //this.load.audio('currentCombatSong', [ (testEnemy.songPath+'.ogg'), (testEnemy.songPath+'.mp3'), (testEnemy.songPath+'.m4a') ]);
                this.load.audio(Violet.name+'CombatSong', [ (Violet.songPath+'.ogg'), (Violet.songPath+'.mp3'), (Violet.songPath+'.m4a') ]);
                this.load.audio(testEnemy.name+'CombatSong', [ (testEnemy.songPath+'.ogg'), (testEnemy.songPath+'.mp3'), (testEnemy.songPath+'.m4a') ]);
                this.load.audio(bossEnemy.name+'CombatSong', [ (bossEnemy.songPath+'.ogg'), (bossEnemy.songPath+'.mp3'), (bossEnemy.songPath+'.m4a') ]);
                this.load.image(Violet.name, Violet.imagePath);
                this.load.image(testEnemy.name, testEnemy.imagePath);
                this.load.image("fondo", "./assets/img/IlustracionCombatZoneProvisional_LRhythm.jpg");
                this.load.image("menufondo", "./assets/img/background.png");
                this.load.image("title", "./assets/img/title.png");
                

                this.load.image(bossEnemy.name, bossEnemy.imagePath);
                this.load.image("sawa", "./assets/img/fathomgames500px.png");
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
                this.load.image("fansAferrimosFondo", "./assets/img/NPCs/fansAferrimosFondo.png");
                this.load.image("mechanic", "assets/img/NPCs/mechanic.png");
                this.load.image("mechanicFondo", "assets/img/NPCs/mechanic.png");
                this.load.image("managerEstirado", "./assets/img/NPCs/managerEstirado.png");
                this.load.image("managerEstiradoFondo", "./assets/img/NPCs/managerEstiradoFondo.png");
                this.load.image("tarjetaContacto", "./assets/img/NPCs/tarjetaContacto.png");
                this.load.image("toxicFan", "./assets/img/NPCs/toxicFan.png");
                this.load.image("toxicFanFondo", "./assets/img/NPCs/toxicFanFondo.png");
                this.load.image("knife", "./assets/img/NPCs/knife.png");
                this.load.image("shield", "./assets/img/tileMarkers/shield.png");
                this.load.image("sword", "./assets/img/tileMarkers/sword.png");
                this.load.image("bell", "./assets/img/tileMarkers/bell.png");
                this.load.image("earworm", "./assets/img/tileMarkers/earworm.png");
                this.load.image("clock", "./assets/img/tileMarkers/cdTile.png");
                this.load.image("NextBattleButton", "./assets/img/NextBattleButton.png");
                this.load.image("returnButton", "./assets/img/returnButton.png");
                this.load.image("earwormParticle", "./assets/img/Earworm.png");
                this.load.image("forteShield", "./assets/img/Forte.png");
                this.load.image("silentMarker", "./assets/img/Rest.png");
                this.load.image("soloMarker", "./assets/img/Solo.png");
                this.load.image("anchorMarker", "./assets/img/Anchor.png");
                this.load.image("accompanimentMarker", "./assets/img/Accompaniment.png");
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

    
}