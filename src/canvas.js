// handles the canvas and all the information in it -> will be the one to actually draw the boids
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 500;
const DEFAULT_CLEARANCE = 20;  // If the boids cross this default_clearance, then we need to reroute them back
const FPS = 50;

class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = DEFAULT_WIDTH;
        this.canvas.height = DEFAULT_HEIGHT;

        this.ctx = this.canvas.getContext("2d");
        this.boid_list = [];
    }

    start() {
        this.interval(this.update, Math.floor(1000 / FPS))
    }

    update() {
        this.clear();
        // go through boid_list and update each one, will have to do some geometry with proximity to other boids as well as well as actually drawing the boids
    }

    clear() {

    }
}