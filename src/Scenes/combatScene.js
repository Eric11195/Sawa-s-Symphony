import {KEY_BINDINGS} from '../Utils/inputKeys.js';
import Player from '../BoardUnits/player.js';
import Clock from '../Utils/clock.js';
import RhythmMarker from '../UIelems/rhythmMarker.js';
import Instrument from "../Upgrades/instrument.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import Enemy from "../BoardUnits/enemy.js";
import testEnemy from "../DataDumpFiles/Enemies/testEnemy.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import ArtifactList from '../Upgrades/artifacts.js';
import vsMarker from "../UIelems/vsMarker.js";
import DescriptionImages from "../UIelems/descriptionImages.js";

let deltaTime;
let clockInstance;
let music;
export {deltaTime, clockInstance};

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

    init(){

    }

    preload(){
        this.load.audio('currentCombatSong', [ (testEnemy.songPath+'.ogg'), (testEnemy.songPath+'.mp3'), (testEnemy.songPath+'.m4a') ]);

        this.load.image(testEnemy.name, testEnemy.imagePath);
        this.load.image("fondo", "./assets/img/IlustracionCombatZoneProvisional_LRhythm.jpg");
        this.load.image("sawa", "./assets/img/fathomgames500px.png");
        /**Todo cambiar clock por la imagen de las notitas que bajan hasta el punto correcto*/
        this.load.image("clock", "./assets/img/discord.png");
        this.load.image("rhythmMarker", "./assets/img/rhythmMarker.png");
        this.load.image("vsMarker", "./assets/img/vsMarker.png");

        this.load.image("Flauta", "./assets/img/flauta.png");
        this.load.image("Piano", "./assets/img/piano.png");
       
        this.load.image("sostenuto", "./assets/img/sostenuto.png");
        this.load.image("vibrato", "./assets/img/vibrato.png");

        this.load.spritesheet('notes', 'assets/img/notasSpriteSheet.png', {frameWidth: 32, frameHeight: 32});
        
    }

    /**
     * @todo mover todas las funciones del jugador movimiento y tal a una sola clase
     */
    //MUY IMPORTANTE, cargar antes las imagenes que esten más detras pq si no taparan las que hayamos cargado antes
    create(){     
        //iniciar el clock con los BPM como parametro
        clockInstance = new Clock(this, testEnemy.bpm);
        
        //Esta linea crea todas las teclas que usaremos en esta escena a paritr del fichero KEY_BINDINGS
        this.KEYS = this.input.keyboard.addKeys(KEY_BINDINGS);

        //Create fondo
        this.add.image(0,0,"fondo").setDisplaySize(this.game.scale.width, this.game.scale.height).setOrigin(0,0);
        //Crea un player con la escena, la pos00x, pos00y, tileDiffx, tileDiffy
        this.player = new Player(this, new Instrument(this,InstrumentDataBase[0],0), new Instrument(this, InstrumentDataBase[1],1));

        //Get Artifact
        ArtifactList[0].effect();
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
        this.playerNotes = this.physics.add.group();
        this.enemyNotes = this.physics.add.group();
        //Contiene las notas que chocan contra notas del player
        this.collideWithPlayerNotes = this.physics.add.group();
        //Contiene las notas del enemigo o del player que chocan entre sí
        this.collideWithEnemyNotes = this.physics.add.group();

        //Las notas del enemigo se chocan con el player
        this.physics.add.overlap(this.enemyNotes, this.player, (player,note)=>{
            if(!note.piano){
                this.enemyPoints+= Math.pow(2,note.tipoNota);
                this.enemyMarker.text = this.enemyPoints;
                this.vsMarker.UpdatePos(this.playerPoints,this.enemyPoints);
                note.destroy();
            }
            /**@todo sumarle puntuación al enemy */
        });
        //Notas del player chocandose contra el enemigo
        this.physics.add.overlap(this.playerNotes, this.enemy, (enemy,note)=>{
            if(!note.piano){
                this.playerPoints+= Math.pow(2,note.tipoNota);
                this.playerMarker.text = this.playerPoints;
                this.vsMarker.UpdatePos(this.playerPoints,this.enemyPoints);
                note.destroy();
            }
            /**@todo sumarle puntuación al player */
        });

        //Notas del player chocandose contra sus propias notas
        this.physics.add.overlap(this.collideWithPlayerNotes, this.playerNotes, (collidingNote, receivingNote)=>{
            if(!collidingNote.piano && !receivingNote.piano)
            if(!collidingNote.notesCollidedWith.includes(receivingNote)){
                receivingNote.AddKeyword(collidingNote.applyToPlayerNotes);
                collidingNote.notesCollidedWith.push(receivingNote);
                console.log(collidingNote.applyToPlayerNotes);
            }
        });
        //Notas del player chocandose contra notas Enemy
        this.physics.add.overlap(this.collideWithEnemyNotes, this.enemyNotes, (collidingNote, receivingNote)=>{
            if(!collidingNote.piano && !receivingNote.piano)
            if(!collidingNote.notesCollidedWith.includes(receivingNote)){
                //console.log(collidingNote.efectosAccompaniment);
                //console.log(collidingNote.efectosAccompaniment);
                receivingNote.AddKeyword(collidingNote.applyToEnemyNotes);
                console.log(collidingNote.applyToEnemyNotes);
                /**@todo hacer que la nota aplique los efectos necesarios */
                collidingNote.notesCollidedWith.push(receivingNote);
            }
        });
        //--------------------------------------------------------------------------------------------------------------------------

    }

    update(){
        ///delta time calculation
        deltaTime = new Date() - this.lastFrameTime;
        this.lastFrameTime = new Date();

        
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
        }
    }


    startCombatSong(){
        this.startSongEvent = this.time.addEvent({delay: clockInstance.delayTimer - testEnemy.msSongStart, callback: ()=>{music.play()}});
    }

    callOnce(callback, context = this) {

        if (typeof callback !== 'function') {
            callback = () => {
            };
        }

        let once = false;

        return (...args) => {
            if (!once) {
                once = true;
                callback.apply(context, args);
            }
        }

    }
}