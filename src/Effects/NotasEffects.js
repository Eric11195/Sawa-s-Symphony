import { Tile00PositionY, TileDiffY, TileDiffX } from "../Utils/screenPositions.js";
import Nota from "../Projectiles/nota.js";

const notaEffects = {
    forte: function(nota)
    {
        if(nota.notesCollidedWith==undefined) nota.notesCollidedWith =[];
        if(nota.direction==1){
            nota.scene.collideWithEnemyNotes.add(nota);
        }else{
            nota.scene.collideWithPlayerNotes.add(nota);
        }
    },
    piano: function(nota)
    {
        nota.piano = true;
    },
    earworm: function(nota,earwormToAdd){
        if(nota.earworm==undefined){nota.earworm=0;}
        nota.earworm+=earwormToAdd;
       
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
        if(nota.notesCollidedWith==undefined) nota.notesCollidedWith =[];
        if(nota.direction == -1){
            nota.scene.collideWithEnemyNotes.add(nota);
        }else{
            nota.scene.collideWithPlayerNotes.add(nota);
        }
        nota.efectosAccompaniment=efectosAccompaniment;
    },
    silent: function(nota,silentToAdd)
    {
        if(nota.silent==undefined){nota.silent=0;}
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
            const newNota = new Nota(nota.scene,0,0,nota.tipoNota,1);

            /**@todo IMPORTANTE, cada vez que se meta una nueva propiedad que debería ser copiada hay que meterla aquí */
            newNota.speed = nota.speed;
            newNota.silent = nota.silent;
            newNota.earworm = nota.earworm;
            newNota.piano = nota.piano;
            newNota.efectosAccompaniment = nota.efectosAccompaniment;
            newNota.notesCollidedWith = [];
            if(nota.scene.collideWithPlayerNotes.contains(nota)){
                nota.scene.collideWithPlayerNotes.add(newNota);
            }
            if(nota.scene.collideWithEnemyNotes.contains(nota)){
                nota.scene.collideWithEnemyNotes.add(newNota);
            }

            newNota.x = nota.x + newRelativePos.x * TileDiffX();
            newNota.y = nota.y + newRelativePos.y * TileDiffY();
        }
    },
    split: function(nota){
        nota.AddKeyword({copy:{x:0,y:1}});
        if(nota.y - TileDiffY() < Tile00PositionY()){
            nota.destroy();
        }else{
            nota.y -= TileDiffY();
        }
    }

}

export default notaEffects;