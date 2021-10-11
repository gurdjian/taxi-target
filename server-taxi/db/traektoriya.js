/* eslint-disable no-plusplus */
const fs = require('fs');

class Traektoria {
  constructor() {
    this.coords = [];
    this.step = 0;
    this.currentDuration = 0;
    this.inProcess = false;
    this.queue = [];
    this.currentTimerId = 0;
  }

  init() {
    const arr = fs.readFileSync('./db/traektoria.json', 'utf-8');
    this.coords = JSON.parse(arr);
  }

  stopRoute() {
    clearInterval(this.currentTimerId);
    this.step = 0;
    this.inProcess = false;
    // if (this.queue.length > 0) {
    //   this.startRoute(this.queue.shift());
    // } else {
    //   this.currentDuration = 0;
    // }
  }

  startRoute(duration = 50) {
    if (!this.inProcess) {
      this.currentDuration = duration;
      const timer = setInterval(() => {
        this.inProcess = true;
        this.step += 1;
        console.log(`timerId = ${timer}\tstep = ${this.step}\tqueue = ${this.queue}`);
        if (this.step >= this.coords.length) {
          clearInterval(timer);
          this.step = 0;
          this.inProcess = false;
          if (this.queue.length > 0) {
            this.startRoute(this.queue.shift());
          } else {
            this.currentDuration = 0;
          }
        }
      }, duration);
      this.currentTimerId = timer;
    } else {
      this.queue.push(duration);
    }
  }

  getCurrentCoordinate() {
    return this.coords[this.step];
  }
}

module.exports = Traektoria;
