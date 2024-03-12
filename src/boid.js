// boid class
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 500;
const MIN_VELOCITY = 1;
const MAX_VELOCITY = 5;
const DEFAULT_CLEARANCE = 20;  // If the boids cross this default_clearance, then we need to reroute them back

class Boid {
    constructor() {
        this.x = Math.floor((Math.random() * (DEFAULT_WIDTH - DEFAULT_CLEARANCE * 2)) + DEFAULT_CLEARANCE);
        this.y = Math.floor((Math.random() * (DEFAULT_HEIGHT - DEFAULT_CLEARANCE * 2)) + DEFAULT_CLEARANCE);

        this.vx = Math.floor((Math.random() * MAX_VELOCITY) + MIN_VELOCITY);
        this.vy = Math.floor((Math.random() * MAX_VELOCITY) + MIN_VELOCITY);
    }
}