import notaEffects from "../Effects/notasEffects.js";
import Nota from "../Projectiles/nota.js";
/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const InstrumentDataBase = [
{
    nombre: "Flauta",
    description: 
    `Amarilla y de funda verde`,
    baseCooldown: 2,
    numeroNotas: 1,
    tipoNotas: 0,
    noteKeywords: {forte:null,allegro:null, accompaniment:{split:2}},
},
{
    nombre: "Piano",
    description: 
`A diferencia de ti, no se
toca solo por las noches`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    notePositionMod: [/*{x:0,y:1},*/{x:0,y:0}/*,{x:0,y:-1}*/]
}
];

export default InstrumentDataBase;