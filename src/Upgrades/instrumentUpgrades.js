const InstrumentUpgrades = [
    {
        nombre: "Bless_of_Immediacy",
        description: "Tired of waiting?",
    //Reducir Cooldown en 1
        effectToApply: function(instrument){
            instrument.cooldown = Math.max(instrument.cooldown-1,1);
        },
    },
    {
        nombre: "Bless_of_Elongation",
        description: `Your lungs will suffer
the public will love you`,
            //Mejorar nota
        effectToApply: function(instrument){
            instrument.tipoNotas = Math.max(Math.min(instrument.tipoNotas+1, 2), 0);
        }
    },
    {
        nombre: "Double_Tempo_Blessing",
        description: `There's never enough notes`,
        //Aumentar numero notas
        effectToApply: function(instrument){
            instrument.numeroNotas++;
        },
    }
]

export default InstrumentUpgrades;