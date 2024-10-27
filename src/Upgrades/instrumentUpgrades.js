const InstrumentUpgrades = [
    //Reducir Cooldown en 1
    function(instrument){
        instrument.cooldown = Math.max(instrument.cooldown-1,1);
    },
    //Mejorar nota
    function(instrument){
        instrument.tipoNotas = Math.max(Math.min(instrument.tipoNotas+1, 2), 0);
    }, 
    //Aumentar numero notas
    function(instrument){
        instrument.numeroNotas++;
    },
]

export default InstrumentUpgrades;