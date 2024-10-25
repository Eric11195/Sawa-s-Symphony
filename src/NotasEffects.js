const notaEffects = {
   /* /**
     * 
     * @param {Nota} nota 
     
    forte: (nota) => {
        nota.properties.set("forte", true);
    },*/
    forte: function(){
        this.forte= true;
    },
    piano: function()
    {
        this.piano= true;
    },
    earworm: function(earwormToAdd){
        console.log(earwormToAdd);
        if(this.earworm==undefined){this.earworm=0;}
        console.log(this.earworm+","+earwormToAdd);
        this.earworm+=earwormToAdd;
       
    },
    allegro: function(){
        this.speed = 2 ;
    },
    adagio: function()
    {
        this.speed=1/2;
    },
    acompañamiento: function(efectosAcompañamiento)
    {
        this.efectosAcompañamiento=efectosAcompañamiento;
    }

}
export default notaEffects