const InstrumentUpgrades = [
    {
        nombre: "Blessing_of_Haste",
        description: `Waves crashed on the city walls,
each drop stronger than the last.`,
    //Reducir Cooldown en 1
        effectToApply: function(instrument){
            instrument.cooldown = Math.max(instrument.cooldown-1,1);
        },
    },
    {
        nombre: "Blessing_of_Perpetuity",
        description: `And when the wanderer washed ashore,
the storm yet lived in her.`,
            //Mejorar nota
        effectToApply: function(instrument){
            instrument.tipoNotas = Math.max(Math.min(instrument.tipoNotas+1, 2), 0);
        }
    },
    {
        nombre: "Blessing_of_Abundance",
        description: `They learnt to harness destruction.
They learnt to harness creation.`,
        //Aumentar numero notas
        effectToApply: function(instrument){
            instrument.numeroNotas++;
        },
    }
]

export default InstrumentUpgrades;