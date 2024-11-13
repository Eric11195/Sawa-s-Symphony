import { Tile00PositionY, TileDiffY, TileDiffX } from "../Utils/screenPositions.js";
import { notasPool } from "../Scenes/combatScene.js";

const notaEffects = {
    //damages enemy notes on contact
    forte: function(nota)
    {
        nota.AddKeyword({clash:{damage:null}});
        nota.applyToSelfOnEnemyNoteImpact = {damage:null};
        
    },
    //doesnt collide with anything
    piano: function(nota)
    {
        nota.piano = true;
    },
    //Venom, it deals X damage and then it halves
    earworm: function(nota,earwormToAdd){
        nota.earworm+=earwormToAdd;
        //console.log("earworm:", nota.earworm);
    },
    allegro: function(nota){
        nota.speed = 2 ;
    },
    adagio: function(nota)
    {
        nota.speed =(1/2);
    },
    //effects on ally note touch
    accompaniment: function(nota,efectosAccompaniment)
    {
        if(nota.direction == -1){
            Object.keys(efectosAccompaniment).forEach(key => {
                nota.applyToEnemyNotes[key] = efectosAccompaniment[key];
            });
            //nota.applyToEnemyNotes = efectosAccompaniment;
        }else{
            Object.keys(efectosAccompaniment).forEach(key => {
                nota.applyToAllyNotes[key] = efectosAccompaniment[key];
            });
        }
    },
    //paralizes the note for as long as it has silent. It is reduced by 1 each beat
    silent: function(nota,silentToAdd)
    {
        nota.silent+=silentToAdd;
    },
    //damages 1 note
    damage: function(nota){
        nota.tipoNota--;
        if(nota.tipoNota < 0){
            nota.AddKeyword({destroy:null});
            return null;
        }
        //Si no se ha destruido entra aquí. Esto hace que aquí se puedan meter funciones por detrás para hacer artifacts
        nota.UpdateImage();
        
    },
    //Upgrades a note 1 categorie
    upgrade: function(nota){
        nota.tipoNota = Math.max(Math.min(nota.tipoNota+1, 2), 0);
        nota.UpdateImage();
    },
    //coppies a note with everything that it contains
    copy: function(nota, newRelativePos){
        //Compruebo que este dentro del tablero
        if(nota.y + newRelativePos.y*TileDiffY() > Tile00PositionY() && nota.y + newRelativePos.y*TileDiffY() < Tile00PositionY() + 5*TileDiffY()){
            const newNota = notasPool.Spawn(0,0,1,nota.tipoNota);//new Nota(nota.scene,0,0,nota.tipoNota,1);

            /**@todo IMPORTANTE, cada vez que se meta una nueva propiedad que debería ser copiada hay que meterla aquí */
            newNota.speed = nota.speed;
            newNota.silent = nota.silent;
            newNota.earworm = nota.earworm;
            newNota.piano = nota.piano;
            newNota.applyToAllyNotes = nota.applyToAllyNotes;
            newNota.applyToEnemyNotes = nota.applyToEnemyNotes;
            newNota.applyToSelfOnEnemyNoteImpact = nota.applyToSelfOnEnemyNoteImpact;
            newNota.applyToSelfOnAllyNoteImpact = nota.applyToSelfOnAllyNoteImpact;
            newNota.notesCollidedWith = [];

            newNota.x = nota.x + newRelativePos.x * TileDiffX();
            newNota.y = nota.y + newRelativePos.y * TileDiffY();
        }
    },
    //put 2 notes, 1 above and 1 down the original, eliminates the original
    split: function(nota){
        nota.AddKeyword({copy:{x:0,y:1}});
        if(nota.y - TileDiffY() < Tile00PositionY()){
            nota.DestroyMe();
        }else{
            nota.y -= TileDiffY();
        }
    },
    moveNote: function (nota, newPos){

        nota.x += newPos.x * TileDiffX();
        if(nota.y + newPos.y*TileDiffY() >= Tile00PositionY() && nota.y + newPos.y*TileDiffY() <= Tile00PositionY() + 4*TileDiffY()){
            nota.y += newPos.y * TileDiffY();
        }
    },
    moveYRandom: function(nota){
        //Esta arriba del todo
        if(nota.y == Tile00PositionY()){
            nota.AddKeyword({moveNote:{x:0,y:1}});
        }//Está abajo del todo
        else if(nota.y == Tile00PositionY()+4*TileDiffY()){
            nota.AddKeyword({moveNote:{x:0,y:-1}});
        }//Otherwise
        else{
            nota.AddKeyword({moveNote:{x:0,y:Math.random() < 0.5 ? -1 : 1}});
        }


    },
    //Añadir las keywords de vibrato
    vibrato: function (nota){        
        nota.AddKeyword({accompaniment:{moveYRandom:null}, clash:{moveYRandom:null}});
    },
    //destruir nota
    destroy: function(nota){
        nota.DestroyMe();
    },
    //x3 de velocidad
    presto: function(nota){
        nota.speed = 3;
    }, 
    //efectos al chocar con notas del rival
    clash: function(nota, efectosClash){
        if(nota.direction == -1){
            Object.keys(efectosClash).forEach(key => {
                nota.applyToAllyNotes[key] = efectosClash[key];
            });
        }else{
            Object.keys(efectosClash).forEach(key => {
                nota.applyToEnemyNotes[key] = efectosClash[key];
            });
        }
    }

}

export default notaEffects;
