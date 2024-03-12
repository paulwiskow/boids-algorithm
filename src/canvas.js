// handles the canvas and all the information in it -> will be the one to actually draw the boids
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 500;
const DEFAULT_CLEARANCE = 20;

class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = DEFAULT_WIDTH;
        this.canvas.height = DEFAULT_HEIGHT;

        this.ctx = this.canvas.getContext("2d");
        this.boid_list = [];
    }

    start() {

    }

    update() {

    }

    clear() {

    }
}