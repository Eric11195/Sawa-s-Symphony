import {KEY_BINDINGS} from '../Utils/inputKeys.js';
import Player from '../BoardUnits/player.js';
import Clock from '../Utils/clock.js';
import RhythmMarker from '../UIelems/rhythmMarker.js';
import Instrument from "../Upgrades/instrument.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import Enemy from "../BoardUnits/enemy.js";
import testEnemy from "../DataDumpFiles/Enemies/testEnemy.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import ArtifactList from '../DataDumpFiles/artifacts.js';
import vsMarker from "../UIelems/vsMarker.js";
import DescriptionImages from "../UIelems/descriptionImages.js";
import Pool from "../Projectiles/projectilePool.js";
import BaseProjectile from "../Projectiles/baseprojectile.js";


let clockInstance;
let notasPool;
let music;
export {clockInstance, notasPool};

/*Escena de Phaser*/
export default class combatScene extends Phaser.Scene {
    playerPoints;
    enemyPoints;
    /**
     * @todo hacer el juego resizeable, tutorial -> https://medium.com/@tajammalmaqbool11/full-screen-size-and-responsive-game-in-phaser-3-e563c2d60eab
     */

    constructor(){

        super({key: "combatScene"});

        this.playerPoints = 0;
        this.enemyPoints = 0;

    }


    init(data){
        if(data.player===undefined) console.log("El jugador no ha sido cargado");
        else{
            this.player = data.player;
        }

    }
    
    preload(){

       

        
        /**Todo cambiar clock por la imagen de las notitas que bajan hasta el punto correcto*/
       

       
        

    }

    /**
     * @todo mover todas las funciones del jugador movimiento y tal a una sola clase
     */
    //MUY IMPORTANTE, cargar antes las imagenes que esten más detras pq si no taparan las que hayamos cargado antes
    create(){     

        this.add.image(0,0,"fondo").setDisplaySize(this.game.scale.width, this.game.scale.height).setOrigin(0,0).depth = -1;

        clockInstance = new Clock(this, testEnemy.bpm);
        if(this.player===undefined){
            this.player = new Player(this, InstrumentDataBase[0], InstrumentDataBase[1]);
        }else{
            //Si ya tenemos player le damos los parametros del anterior
            this.player = new Player(this, this.player.instrumentos[0], this.player.instrumentos[1], this.player.instrumentos[2], this.player.Syncopate, this.player.Tempo);
        }

        //Creamos una pool de notas
		notasPool = new Pool(this, 100, false);	
		let notas = [];
		for (let i = 0; i < 100; i++) {
			let nota = new BaseProjectile(this, notasPool);
			notas.push(nota);
		}
		notasPool.addMultipleEntity(notas);
        
        //Esta linea crea todas las teclas que usaremos en esta escena a paritr del fichero KEY_BINDINGS
        this.KEYS = this.input.keyboard.addKeys(KEY_BINDINGS);

        //Get Artifact
        //ArtifactList[0].effect();
        //this.player.instrumentos[0].ApplyUpgrade(InstrumentUpgrades[1]);
        this.enemy = new Enemy(this, testEnemy);

        //this.testDescriptionImages = new DescriptionImages(this,200,200,"negra", "MIAU","probando probando");


        this.vsMarker = new vsMarker(this, {x:195,y:50}, {x:1160,y:60});

        music = this.sound.add('currentCombatSong');
        clockInstance.eventEmitter.once("BeatNow", this.startCombatSong, this);


        //MARCADORES DE PTS
        this.playerMarker = this.add.text(140,32,"0",{fontFamily:"Grandstander",fontSize:"48px"}).setTint(0x179bae);
        this.enemyMarker = this.add.text(1200,32,"0",{fontFamily:"Grandstander",fontSize:"48px"}).setTint(0xff8343);


        //Crea los marcadores de ritmo
        new RhythmMarker(this, 3);

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


        //Colisiones------------------------------------------------------------------------------------------------------------------------
        this.notes = this.physics.add.group();

        //Las notas del enemigo se chocan con el player
        this.physics.add.overlap(notasPool.getPhaserGroup(), this.player, (note,player)=>{

            if(!note.piano && note.direction == -1){
                if(note.tipoNota !== undefined) {
                    this.enemyPoints+= Math.pow(2,note.tipoNota);
                    this.enemyMarker.text = this.enemyPoints;
                    this.UpdateVsMarker();
                    player.AddEarworm(note.earworm);
                }
                note.DestroyMe();
            }
            /**@todo sumarle puntuación al enemy */
        });
        //Notas del player chocandose contra el enemigo
        this.physics.add.overlap(notasPool.getPhaserGroup(), this.enemy, (note,enemy)=>{
            //console.log(note, enemy);
            if(!note.piano && note.direction == 1){
                if(note.tipoNota !== undefined) {
                    this.playerPoints+= Math.pow(2,note.tipoNota);
                    this.playerMarker.text = this.playerPoints;
                    this.UpdateVsMarker();
                    enemy.AddEarworm(note.earworm);
                }
                note.DestroyMe();
            }
            /**@todo sumarle puntuación al player */
        });

        //Notas del player chocandose contra sus propias notas
        this.physics.add.overlap(notasPool.getPhaserGroup(), undefined, (note1, note2)=>{
            if(!note1.piano && !note2.piano)
                if(!(note1.notesCollidedWith.includes(note2) && note2.notesCollidedWith.includes(note1))){
                    if(note1.direction == note2.direction){
                        note1.AddKeyword(note2.applyToAllyNotes);
                        note2.AddKeyword(note1.applyToAllyNotes);
                        note1.AddKeyword(note1.applyToSelfOnAllyNoteImpact);
                        note2.AddKeyword(note2.applyToSelfOnAllyNoteImpact);
                    }else{
                        note1.AddKeyword(note2.applyToEnemyNotes);
                        note2.AddKeyword(note1.applyToEnemyNotes);
                        note1.AddKeyword(note1.applyToSelfOnEnemyNoteImpact);
                        note2.AddKeyword(note2.applyToSelfOnEnemyNoteImpact);
                    }
                    note1.notesCollidedWith.push(note2);
                    note2.notesCollidedWith.push(note1);
                }
        });
        //--------------------------------------------------------------------------------------------------------------------------

    }

    update(){
        //Ejemplo de como llamar ejecutar funciones cuando una tecla se pulse (solo se ejecuta una vez por cada pulsación de tecla)
        //KEYS.UP.isDown se puede usar si queremos hacerlo mientras se mantenga pulsado
        if (Phaser.Input.Keyboard.JustDown(this.KEYS.UP)) {
            this.player.TryNormalMove(0,-1);
        }
        else if(Phaser.Input.Keyboard.JustDown(this.KEYS.DOWN)) {
            this.player.TryNormalMove(0,1);
        }
        else if (Phaser.Input.Keyboard.JustDown(this.KEYS.LEFT)) {
            this.player.TryNormalMove(-1,0);
        }
        else if (Phaser.Input.Keyboard.JustDown(this.KEYS.RIGHT)){
            this.player.NormalMove(1,0);
        }else if(Phaser.Input.Keyboard.JustDown(this.KEYS.BUTTON1)){
            this.player.TryPlayingInstrument(0);
        }else if(Phaser.Input.Keyboard.JustDown(this.KEYS.BUTTON2)){
            this.player.TryPlayingInstrument(1);
        }else if(Phaser.Input.Keyboard.JustDown(this.KEYS.BUTTON3)){
            this.player.TryPlayingInstrument(2);
        }else if(Phaser.Input.Keyboard.JustDown(this.KEYS.NEXTSCENE)){
            this.ChangeToRewardsScene();
        }
    }


    startCombatSong(){
        this.startSongEvent = this.time.addEvent({delay: clockInstance.delayTimer - testEnemy.msSongStart, callback: ()=>{music.play()}});
    }

    ChangeToRewardsScene(){
        music.stop();
        this.scene.start("rewardsScene", {player:this.player});
    }


    SpawnProjectile(config){
        this.projectilePool.spawn();
    }

    UpdateVsMarker(){
        this.vsMarker.UpdatePos(this.playerPoints,this.enemyPoints);
    }

    AddPointsToPlayer(toAdd){
        this.playerPoints+= toAdd;
        this.playerMarker.text = this.playerPoints;
        this.UpdateVsMarker();
    }

    AddPointsToEnemy(toAdd){
        this.enemyPoints+= toAdd;
        this.enemyMarker.text = this.enemyPoints;
        this.UpdateVsMarker();
    }
}