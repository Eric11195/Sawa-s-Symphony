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
        if(nota.tipoNota < 0) nota.destroy();
        else nota.UpdateImage();
    },
    upgrade: function(nota){
        nota.tipoNota = Math.max(Math.min(nota.tipoNota+1, 2), 0);
        nota.UpdateImage();
    }

}
export default notaEffects