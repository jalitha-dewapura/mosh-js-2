

function Circle(redius) {
    this.redius = redius;
    let defaultLocation = {x: 1, y: 1};

    this.draw = function() {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x > 0 || !value.y > 0)
                throw new Error('Invalid argument!');

            defaultLocation = value;
        }
    })

}

let circle = new Circle(1);
circle.draw;
circle.defaultLocation = {x: 8, y: 2};

console.log(circle);