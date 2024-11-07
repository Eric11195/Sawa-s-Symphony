import Nota from "../Projectiles/nota.js";
/**Tiene una array con todos los archivos necesarios para configurar los distintos instrumentos */
const InstrumentDataBase = [
{
    nombre: "Recorder",
    description: 
    `You've got nothing better?`,
    baseCooldown: 2,
    numeroNotas: 1,
    tipoNotas: 0,
    noteKeywords: {forte:null,allegro:null, accompaniment:{silent:2}},
    instrumentKeywords: {move:{x:0,y:-1}}
},
{
    nombre: "Piano",
    description: 
`Can't sound bad`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    notePositionMod: [/*{x:0,y:1},*/{x:0,y:0}/*,{x:0,y:-1}*/],
    instrumentKeywords: {sostenuto:{pos:{x:0,y:0}, tipoNota: 1}}
}, 
{
    nombre: "Bell",//cascabel
    description: 
`Slippery thing, stop moving!`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    //instrumentKeywords: {sostenuto:{pos:{x:0,y:0}, tipoNota: 1}}
},
{
    nombre: "Electric_Guitar",
    description: 
`Get out of my way
I'm the star`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
    nombre: "Trumpet",
    description: 
`Jazzy Overflow`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
    nombre: "Ukelele", //ROR reference
    description: 
`...and his music
was electric`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
{
    nombre: "Golden_Lute",
    description: 
`Melody's Favourite`, //Crypt of the necrodancer reference
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},/*
{
    nombre: "Otter_Orchestra",
    description: 
`Too many instruments
for one otter`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},*/
{
    //Aumenta las acumulaciones de todas las keywords acumulables que ya existiesen
    nombre: "Psaltry", //brutal Orchestra enemy
    description: 
`Painful,
not only to the eyes`,
    numeroNotas: 1,
    tipoNotas: 1,
    baseCooldown: 4,
    instrumentKeywords: {vibrato:{pos:{x:0,y:0}}}
},
];

export default InstrumentDataBase;