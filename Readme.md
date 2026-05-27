# Sawa's Song

![Screenshot of Sawa's Song](assets/img/Sawa'sSongGameImage.png)

**A rhythm-combat roguelite built in JavaScript with Phaser 3**

[![Play Now](https://img.shields.io/badge/Play%20Now-GitHub%20Pages-brightgreen)](https://izandevegalopez.github.io/proyecto_PVLI/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

> **[Play it in your browser →](https://izandevegalopez.github.io/proyecto_PVLI/)**

---

## About

Sawa is a freshwater otter who enters the SEA (Symphonic Entertainment Arena) — the ocean's most prestigious musical tournament. To win, she must defeat 3 opponents and the reigning champion in rhythm-based combat, collecting instruments, artifacts, and upgrades along the way.

Built in 10 weeks by a 4-person team for the *Programación de Videojuegos en Lenguajes Interpretados* course at Universidad Complutense de Madrid (2024-2025).

---

## Gameplay

Combat takes place on a **7×5 grid** divided into player and enemy zones. Both sides fire musical notes across the board — the player who deals more damage to the opponent's self-esteem meter by the end of the fight wins.

The twist: **timing your actions to the beat** unlocks bonus effects. Every enemy has its own BPM, and the rhythm pulses visually on screen. Hit on the beat, and your instruments become significantly more powerful.

Between fights, you visit a lobby where NPCs offer new instruments, upgrades, and artifacts — a roguelite loop inspired by *Slay the Spire*.

**References that shaped the design:**
| Game | Borrowed concept |
|------|-----------------|
| One Step from Eden | Grid-based bullet hell combat |
| Crypt of the Necrodancer | Beat-synced action system |
| Slay the Spire | Artifact and upgrade economy |
| Guitar Hero | Musical note aesthetics |

---

## Technical Highlights

### Object Pooling
All projectiles are managed through a custom `Pool` class (`src/Projectiles/projectilePool.js`) that pre-allocates 100 game objects at scene start, eliminating per-frame `new`/`destroy` calls and GC pressure. The pool supports configurable overflow strategies: grow dynamically, cap at max, or recycle the oldest live entity.

### Beat-Synced Event System
`src/Utils/clock.js` implements a BPM-driven clock built on Phaser's timer events. It broadcasts a `BeatNow` event via `Phaser.Events.EventEmitter` to all subscribed game objects each beat. The `IsTempo()` method calculates rhythm accuracy with a ±125ms window, enabling the game to distinguish on-beat and off-beat inputs.

### Modular Scene Architecture
Seven Phaser scenes (`mainMenu → preloader → combatScene → rewardsScene → rewardsLobbyScene → startScene → winScreen`) with clean scene-to-scene data passing via Phaser's `init(data)` lifecycle. Player state persists across scenes through object handoff.

### Entity Inheritance
`BoardUnit` is the base class for all board-positioned entities. `Player` and `Enemy` extend it, sharing grid-position logic, physics body setup, and beat subscription — while implementing separate combat behavior.

### Data-Driven Design
Instruments, enemies, artifacts, and upgrades are defined as plain data objects in `src/DataDumpFiles/`, decoupled from game logic. This made iteration fast: adding a new instrument required no changes to combat code.

### Note Keyword System
Projectiles carry composable keyword flags (`Forte`, `Piano`, `Earworm`, `Adagio`, `Allegro`, `Sostenuto`, `Acompañamiento`, `Silencio`) processed each beat. Keywords interact — a `Forte+Piano` note won't collide until `Piano` is removed; `Adagio+Allegro` cancel each other out. This creates emergent depth from a small set of rules.

### NPC & Minigame System
A generic `npcClass.js` drives all lobby NPCs, each of which can offer dialogue, item choices, or trigger minigames (including a full Flappy Bird implementation in `src/NPC/minigamesFiles/flappyBird.js`).

---

## Architecture

![Class UML diagram](https://github.com/user-attachments/assets/2a83e079-cad3-42fe-b6ae-3fb4ed864598)

See [`architecture.md`](architecture.md) for the full class diagram and design notes.

---

## A Cappela Soundtrack from different Videogames

All music in Sawa's Song was interpreted by **Izan de Vega López**. The OST was written to match specific BPM values for each enemy encounter, ensuring the rhythm system feels natural and intentional rather than retrofitted.

In total there are three songs:
- Primary Colours - by Publio Delgado, from the videogame 'Brutal Orchestra'
- Neverending Song - by steelplus (はがね), from the videogame 'One Step From Eden'
- Dale Zelda Dale - by GanonRosario, from a meme song

---

## Stack

- **Engine:** Phaser 3
- **Language:** JavaScript (ES Modules)
- **Platform:** Browser (HTML5 Canvas)
- **Hosting:** GitHub Pages

---

## Team — Fathom Games

| Name | Role |
|------|------|
| Izan de Vega López | Programming, Game Design, Music|
| Óscar Melquiades Durán Narganes | Programming, Game Design, Art |
| Sergio Yago Juárez | Programming, Game Design |
| Diego Martín García | Programming|

[![Twitter](https://img.shields.io/badge/Twitter-@FathomGames1-blue)](https://x.com/FathomGames1)
[![Discord](https://img.shields.io/badge/Discord-Join-7289da)](https://discord.gg/Fqsc9G9W)
[![YouTube](https://img.shields.io/badge/YouTube-Channel-red)](https://www.youtube.com/channel/UCYzZh8CjlzoX60kzE2s3ylw)
[![Instagram](https://img.shields.io/badge/Instagram-@fathomgames1-pink)](https://www.instagram.com/fathomgames1/)

---

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).
