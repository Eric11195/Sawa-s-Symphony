import { Tile00PositionY, TileDiffY, TileDiffX } from "../Utils/screenPositions.js";
import { notasPool } from "../Scenes/combatScene.js";

const notaEffects = {
    forte: function(nota)
    {
        nota.applyToEnemyNotes = {destroy:null};
        nota.applyToSelfOnEnemyNoteImpact = {damage:null};
        
    },
    piano: function(nota)
    {
        nota.piano = true;
    },
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
    accompaniment: function(nota,efectosAccompaniment)
    {
        if(nota.direction == -1){
            nota.applyToEnemyNotes = efectosAccompaniment;
        }else{
            nota.applyToAllyNotes = efectosAccompaniment;
        }
    },
    silent: function(nota,silentToAdd)
    {
        nota.silent+=silentToAdd;
    },
    damage: function(nota){
        nota.tipoNota--;
        if(nota.tipoNota < 0){
            nota.destroy();
            return null;
        }
        //Si no se ha destruido entra aquí. Esto hace que aquí se puedan meter funciones por detrás para hacer artifacts
        nota.UpdateImage();
        
    },
    upgrade: function(nota){
        nota.tipoNota = Math.max(Math.min(nota.tipoNota+1, 2), 0);
        nota.UpdateImage();
    },
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

        if(nota.y + newPos.y*TileDiffY() > Tile00PositionY() && nota.y + newPos.y*TileDiffY() < Tile00PositionY() + 5*TileDiffY()){
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
    vibrato: function (nota){        
        nota.applyToEnemyNotes = {moveYRandom:null};
        nota.applyToAllyNotes = {moveYRandom:null};
    },
    destroy: function(nota){
        nota.DestroyMe();
    },
    presto: function(nota){
        nota.speed = 3;
    }

}

export default notaEffects;
