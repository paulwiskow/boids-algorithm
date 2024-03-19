// boid class
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 500;
const MIN_VELOCITY = 1;
const MAX_VELOCITY = 5;
const DEFAULT_CLEARANCE = 20;  

class Boid {
    constructor() {
        this.x = Math.floor((Math.random() * (DEFAULT_WIDTH - DEFAULT_CLEARANCE * 2)) + DEFAULT_CLEARANCE);
        this.y = Math.floor((Math.random() * (DEFAULT_HEIGHT - DEFAULT_CLEARANCE * 2)) + DEFAULT_CLEARANCE);

        // this.v = Math.floor((Math.random() * MAX_VELOCITY) + MIN_VELOCITY);
        this.v = 3;  // Have a default speed for all boids now
        this.orientation = Math.floor(Math.random() * 360);  // 0 degrees on positive x axis
    }

    update_position() {
        this.x += Math.floor(this.v * Math.cos(this.orientation * (Math.PI / 180)));  // Have to convert to radians
        this.y += Math.floor(this.v * Math.sin(this.orientation * (Math.PI / 180)));
    }
}