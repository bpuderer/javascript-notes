
// object literal
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayLegs: function () { return `This duck has ${this.numLegs} legs.` }
};
console.log(duck.name);
console.log(duck.sayLegs());
console.log(Object.getPrototypeOf(duck));



// constructor function
function Dog(name, color) {
    this.name = name;
    this.color = color;
    //this.numLegs = 4;
}
// prototype property
Dog.prototype.numLegs = 4;  // part of Dog, not instance of Dog

let myDog = new Dog("rover", "yellow");
console.log(myDog);
console.log(myDog.numLegs);
console.log(myDog instanceof Dog);
// constructor property is a ref to the constructor function that created the instance
// better to use instanceof since prop can be overwritten
console.log(myDog.constructor === Dog);

const ownProps = [];
const protoProps = [];
for (let property in myDog) {
    if (myDog.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        protoProps.push(property);
    }
}
console.log(`Own: ${ownProps}  Proto: ${protoProps}`);




// change protype to a new object
// MUST REMEMBER TO RESET THE CONSTRUCTOR PROPERTY
function Dog2(name, color) {
    this.name = name;
    this.color = color;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4
}
let myDog2 = new Dog2("rover", "yellow");
console.log(myDog2);

// prototype chain
// Object -> Dog -> myDog2
console.log(Dog.prototype.isPrototypeOf(myDog2));
console.log(Object.prototype.isPrototypeOf(Dog2.prototype));




function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}
Bear.prototype = {
    constructor: Bear,
};

function Animal() { }
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Object.create(obj) creates a new object, and sets obj as the new object's prototype.
let animal = Object.create(Animal.prototype);

// prototype is like the "recipe" for creating an object
// Cat object inherits from Animal
// Cat's prototype constructor is set to Cat
// add a talk() method to the Cat object so that tommy can both eat() and talk()

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.talk = function() {
    console.log("meow");
  };
// but override the eat in Animal
Cat.prototype.eat = function () {
    console.log("cat nom cat nom");
}
let tommy = new Cat("tommy");
tommy.eat();
tommy.talk();
console.log(tommy.constructor);



// use a Mixin to add a function to ojects where inheritance
// doesn't make sense
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("Gliiiiiiiiiiiiiide");
    }
};
glideMixin(bird);
glideMixin(boat);
bird.glide();
boat.glide();




function Bird() {
    // make weight private
    // weight not accessible outside.  Closure
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}




// Immediately Invoked Function Expression (IIFE)
(function () {console.log("anonymous function immediately executing")})();




// IIFE to Create a Module
let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();

let airplane = {
    name: "f16",
};
motionModule.flyMixin(airplane);
airplane.fly();
