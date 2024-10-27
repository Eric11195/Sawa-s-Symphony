//import { vibrato, sostenuto } from './efectos.js';

const InstrumentoEffects = {
    vibrato: function() {
        // Apply vibrato
        console.log("Applying vibrato effect");
        // Implementation goes here

        // cambiar el projectile por un proyectil de otra clase que ya crearé
        const projectile = new Notas();
        projectile.velocity = { x: 1, y: 0 }; // Travels forward along the x-axis
    
        projectile.updatePosition = function(deltaTime) {
            this.position.x += this.velocity.x * deltaTime;
            this.position.y += this.velocity.y * deltaTime;
        };
    
        return projectile;
    },

    // Creates a note generator that sustains a note for a given duration
    sostenuto: function(duration, interval) {
        // Apply sostenuto
        console.log("Applying sostenuto effect");
        // Implementation goes here
        const noteGenerator = new Notas();
        noteGenerator.duration = duration;
        noteGenerator.interval = interval;
        noteGenerator.timeSinceLastNote = 0;
        noteGenerator.elapsedTime = 0;
        noteGenerator.notes = [];
    
        noteGenerator.update = function(deltaTime) {
            this.elapsedTime += deltaTime;
            this.timeSinceLastNote += deltaTime;

            if (this.elapsedTime >= this.duration) {
                this.active = false; // Mark the generator as inactive
            } else if (this.timeSinceLastNote >= this.interval) {
                this.spawnNote();
                this.timeSinceLastNote = 0;
            }

            noteGenerator.spawnNote = function() {
                const note = new Notas();
                this.notes.push(note);
                console.log('Note spawned');
            };
        };
    
        return noteGenerator;
    },
    MovePlayerXY: function(x, y) {
        // Moves the player along the x and y axes
        console.log("Moving player");
        // Implementation goes here

    },
    Ancla: function(duration) {
        // Apply chorus effect to the sound
        console.log("Applying ancla");
        // Implementation goes here
        this.player.canMove = duration;
    },
    //vibrato: vibrato,
    //sostenuto: sostenuto
};

export default InstrumentoEffects;