const notaEffects = {
    forte: function()
    {
        if(this.direction==1){
            this.scene.collideWithEnemyNotes.add(this);
        }else{
            this.scene.collideWithPlayerNotes.add(this);
        }
   /* /**
     * 
     * @param {Nota} nota 
     
    forte: (nota) => {
        nota.properties.set("forte", true);
    },*/

    },
    piano: function()
    {
        this.piano = true;
    },
    earworm: function(earwormToAdd){
        if(this.earworm==undefined){this.earworm=0;}
        this.earworm+=earwormToAdd;
       
    },
    allegro: function(){
        this.speed = 2 ;
    },
    adagio: function()
    {
        this.speed =(1/2);
    },
    accompaniment: function(efectosAccompaniment)
    {
        if(this.notesCollidedWith==undefined) this.notesCollidedWith =[];
        if(this.direction == -1){
            this.scene.collideWithEnemyNotes.add(this);
        }else{
            this.scene.collideWithPlayerNotes.add(this);
        }
        this.efectosAccompaniment=efectosAccompaniment;
    },
    silent: function(silentToAdd)
    {
        if(this.silent==undefined){this.silent=0;}
        this.silent+=silentToAdd;
    },
    damage: function(){
        this.tipoNota--;
        if(this.tipoNota < 0) this.destroy();
        else this.UpdateImage();
    }

}
export default notaEffects