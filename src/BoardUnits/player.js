import Instrumento from "../Upgrades/instrument.js"
import { clockInstance } from "../Scenes/combatScene.js";
import BoardUnit from './boardUnit.js';
import ItemClass from "../DataDumpFiles/RewardClass.js";
import InstrumentDataBase from "../DataDumpFiles/instrumentDataBase.js";
import RewardClass from "../DataDumpFiles/RewardClass.js";
import InstrumentUpgrades from "../Upgrades/instrumentUpgrades.js";
import ArtifactList from "../DataDumpFiles/artifacts.js";
import DescriptionImages from "../UIelems/descriptionImages.js";
import ChoosePlayerInstrumentMenu from "../UIelems/ChoosePlayerInstrumentMenu.js";
import { canClick, setCanClick } from "../Utils/ClickInhibitor.js";
/**
 * Cambiar la clase Player por la clase character
 * Luego player y enemy heredan de la clase character
 */


//Clase player tiene todas las funciones de movimiento, toca instrumentos y demás
//extiende de sprite para usar su cuerpo físico y cambiar la posición y animaciones del personaje según sus acciones
export default class Player extends BoardUnit{
    shells;
    shellEmitter;
    normalMoveLimitPos;
    ancla;
    level;
    /**Contiene los 3 instrumentos del player */
    instrumentos;
    /**
     * @param {*} scene la escena en la que está el personaje
     * @param {*} instrument1
     *      * @param {*} instrument2
     *      * @param {*} instrument3
     */
    constructor(scene, instrumento1 = undefined, instrumento2 = undefined, instrumento3 = undefined, Syncopate, Tempo, shells = 100, level = 1){
        //Crea un sprite con el valor de la escena y la posición inicial del player y la textura de nuestro personaje
        super(scene, {x:1, y:2}, 'sawa');  
        this.setOrigin();
        this.setDisplaySize(100,100);  
        this.normalMoveLimitPos = {
            minX:0,
            minY:0,
            maxX:2,
            maxY:4
        };
        this.ancla = 0;
        this.depth = 100;
        //console.log(this.ancla);
        /**@todo incluir los instrumentos correspondientes */
        this.instrumentos = [instrumento1, instrumento2, instrumento3];
        this.CreateTheNewInstruments();

        clockInstance.eventEmitter.on("BeatNow", this.BeatFunction,this);
        // Agregamos el caballero a las físicas para que Phaser lo tenga en cuenta
		scene.physics.add.existing(this);
        this.body.setSize(350, 150, true);

        if(Syncopate !== undefined) this.Syncopate = Syncopate;
        if(Tempo !== undefined) this.Tempo = Tempo;

        //----------------------------------------------------------------------------------------------------------------------------------------this.level = level;
    }

    TryNormalMove(xAdd,yAdd){
        if(clockInstance.IsTempo(0).canBePlayed && !this.ancla){
            this.NormalMove(xAdd,yAdd)
        }
    }
    /**
     * 
     * @param {*} xAdd las posiciones a mover al player hacia la derecha
     * @param {*} yAdd las posiciones a mover al player hacia abajo
     */
    NormalMove(xAdd, yAdd){
        if(Math.abs(Math.max(this.normalMoveLimitPos.minX,Math.min(this.normalMoveLimitPos.maxX,this.position.x+xAdd))-this.position.x) + Math.abs(Math.max(this.normalMoveLimitPos.minY,Math.min(this.normalMoveLimitPos.maxY,this.position.y+yAdd))-this.position.y)>0){
            if(this.Move(xAdd,yAdd) > 0){
                this.Syncopate(this.position.x, this.position.y);
            }
        }
    }
    TryPlayingInstrument(numeroInstrumento){
        if(this.instrumentos[numeroInstrumento]!=undefined){
            let auxObj = clockInstance.IsTempo(this.instrumentos[numeroInstrumento].actualCooldown);
            if(auxObj.canBePlayed){
                //console.log(auxObj.beforeBeat);
                this.Tempo(numeroInstrumento,auxObj.beforeBeat);
                this.PlayInstrument(numeroInstrumento,auxObj.beforeBeat);
            }
        }
    }
    PlayInstrument(numeroInstrumento, beforeBeat){
        if(beforeBeat){
            this.instrumentos[numeroInstrumento].Play(this.position.x,this.position.y,1,beforeBeat, this.instrumentos[numeroInstrumento]);
        }else{
            this.instrumentos[numeroInstrumento].Play(this.position.x,this.position.y,0,beforeBeat, this.instrumentos[numeroInstrumento]);
        }
    }
    /*
    UpdateScene(newScene){
        //this.scene = newScene;
        newScene.events.once('update',function(){
            console.info('Display List:');
            console.table(this.sys.displayList.list, [ 'name', 'type', 'x', 'y', 'visible', 'renderFlags', 'cameraFilter' ]);
            console.info('Update List:');
            console.table(this.sys.updateList.list, [ 'name', 'type', 'active' ]);
        },newScene)

        this.depth = 100;
        //this.bringToTop()

        //newScene.add.existing(this);
        //this.addToDisplayList(newScene.sys.displayList);
        //this.addToUpdateList(newScene.sys.updateList);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.scene = newScene;
    }*/

    CreateTheNewInstruments(){
        for(let i = 0; i < 3; i++){
            //console.log(this.instrumentos[i]);
            if(this.instrumentos[i] !== undefined){
                //Si tiene un config de instrumentos
                this.instrumentos[i] = new Instrumento(this.scene,this.instrumentos[i],i);
            }
        }
    }

    BeatFunction(){
        if(this.ancla>0){
            this.ancla--;
        }
        if(this.earworm > 0){
            this.scene.AddPointsToEnemy(this.earworm);
            this.earworm = Math.floor(this.earworm/2);
        }
        //console.log(this.ancla);
    }

    /**Produce todos los efectos generales al moverse*/
    Syncopate(xPos,yPos){
        for(let i = 0; i < this.instrumentos.length; i++){
            this.instrumentos[i].Syncopate(xPos,yPos);
        }
        /**@todo Lanzar un evento que coje todo cristo con syncopate */
        //console.log("syncopate");
    }
    /**Produce todos los efectos especiales generales al tocar al ritmo */
    Tempo(numeroInstrumento,beforeBeat){
        
    }


    /**
     * 
     * @param {*} index 
     * @param {RewardClass} rewardClass 
     */
    Equip(index, rewardClass, newScene){
        //console.log(this.ChooseInstrumentMenuSpawn);
        switch (rewardClass){
            case RewardClass.artifact:
                ArtifactList[index].effect();
                break;
            case RewardClass.upgrade:
                this.ChooseInstrumentMenuSpawn(this,newScene, "Aplicar a:", InstrumentUpgrades[index]).then(
                    function(params){
                        InstrumentUpgrades[index].effectToApply(params.player.instrumentos[params.instrumentIndex]);;
                        setCanClick(true);
                    }
                );
                break;
            case RewardClass.instrument:
                let i = 0;
                while(this.instrumentos[i])i++;
                //Si tienes 3 instrumentos
                if(i==3){
                    this.ChooseInstrumentMenuSpawn(this,newScene, "Sustituir por:", InstrumentDataBase[index]).then(
                        function(params) {
                            //console.log(params.player);
                            params.player.instrumentos[params.instrumentIndex] = InstrumentDataBase[index];
                            //console.log(params.player.instrumentos[params.instrumentIndex]);
                            setCanClick(true);
                        }
                    )
                }else{
                    //Te pone el instrumento directamente si tienes slots libres
                    this.instrumentos[i] = InstrumentDataBase[index];
                }
                break;


        }

        /**@todo Al volver a la escena principal, los instrumentos que sean solo el objeto config se tiene que convertir en el instrumento real */

    }
    ChooseInstrumentMenuSpawn(thisPlayer,newScene, textToShow, reward){
        setCanClick(false);
        return new Promise(function(returnIndex){
            let imagesArray = [];
            let fondo = newScene.add.rectangle( 1320/8, 720/8, 1320*6/8, 720*6/8, 0xe69138).setOrigin(0);
            let letras = newScene.add.text( 1320/3.2, 720/4,textToShow, { fontFamily: 'Arial', color: '#000000', fontSize: '32px', fontFamily:"Grandstander"}).setOrigin(0.5);
            for (let i = 0; i<3; i++){
                //console.log(thisPlayer.instrumentos[i].nombre);
                if(thisPlayer.instrumentos[i]!==undefined){
                    let functionCallback = function(){
                            letras.destroy();
                            fondo.destroy();
                            for(let i = 0; i < imagesArray.length; i++){
                                imagesArray[i].PrepareToBeErased();
                                imagesArray[i].destroy();
                            }
                            returnIndex({instrumentIndex:i,player:thisPlayer});
                    }
                    imagesArray
                        .push(new DescriptionImages(newScene, (i+1)*1320/4, 720/2, thisPlayer.instrumentos[i].nombre, thisPlayer.instrumentos[i].nombre, thisPlayer.instrumentos[i].description)
                        .setDisplaySize(100,100)
                        .setInteractive()
                        .on("pointerdown", functionCallback, thisPlayer));

                        //console.log(imagesArray);
                }
            }
            imagesArray.push(new DescriptionImages(newScene, 1320/5, 720/4, reward.nombre, reward.nombre, reward.description).setDisplaySize(100,100));
        })
    }

    /*
    /** Añade shells al jugador, o sustrae si se trata de un parámetro negativo.
     * 
     * @param {integer} shellta Las shells añadidas al jugador.
    
    AddShells(shellta = 0){
        this.shells+=shellta;
        this.shellEmitter.emit('updateshells', this.shells);
    }
    /**
     * 
     * @returns Las shells del jugador.
     */
/*
    GetShells(){
        return this.shells;
    }
    GetLevel(){
        return this.level;
    }
*/
}