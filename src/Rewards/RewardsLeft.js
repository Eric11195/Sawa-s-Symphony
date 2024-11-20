let InstrumentsLeft = [];
let ArtifactsLeft = [];
let UpgradesLeft = [];
let currentShells = 0;

let AddShells = function(number){
    currentShells+=number;
}

export {InstrumentsLeft, ArtifactsLeft, UpgradesLeft, currentShells, AddShells};