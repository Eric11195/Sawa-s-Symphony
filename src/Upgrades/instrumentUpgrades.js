const InstrumentUpgrades = [
    {
        nombre: "Presteza",
        description: "",
    //Reducir Cooldown en 1
        effectToApply: function(instrument){
            instrument.cooldown = Math.max(instrument.cooldown-1,1);
        },
    },
    {
        nombre: "Brio",
        description: "",
            //Mejorar nota
        effectToApply: function(instrument){
            instrument.tipoNotas = Math.max(Math.min(instrument.tipoNotas+1, 2), 0);
        }
    },
    {
        nombre: "Salero",
        description: "",
        //Aumentar numero notas
        effectToApply: function(instrument){
            instrument.numeroNotas++;
        },
    }
]

export default InstrumentUpgrades;