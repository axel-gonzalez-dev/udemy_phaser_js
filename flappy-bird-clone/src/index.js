

import Phaser, { Physics } from 'phaser';

const config = {
    // WebGL (Web graphics library) JS Api for rendering 2D and 3D graphics
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        // Arcade physics plugin, manages physics simulation
        default: 'arcade',
    },
    scene: {
        preload: preload,
        create: create,
    }
}

// Loading assets, such as music, images, animations...
function preload() {
    // This context - scene
    // Contains functions and properies we can use
    debugger;
}

function create() {
    debugger;
}


new Phaser.Game(config);
