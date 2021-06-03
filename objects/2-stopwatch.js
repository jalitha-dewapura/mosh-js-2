
function Stopwatch() {
    let duration = 0;
    let running = false;
    let startTime;
    let stopTime;

    this.start = function() {
        if(running)
            throw new Error('Stopwatch is already started!');
        running = true;
        startTime = Date.now();
    }

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is already stoped!');
        running = false;
        stopTime = Date.now();
        duration += (stopTime - startTime)/1000;
    }

    this.reset = function() {
        duration = 0;
        running = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })

}

const sw = new Stopwatch();

console.log(sw.duration);

sw.start();
