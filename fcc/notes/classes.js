// pre-ES6, functions as constructors.  see ../oop.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// TODO: yield

class Animal {
    constructor(name) {
        this.name = name;
    }
    static staticProperty = 'staticProperty value';
    static staticMethod() {
      return 'static method has been called.';
    }
    speak() {
        console.log("animal speak");
    }
}

class Cat extends Animal {
    #lives;
    // If there is a constructor present in the subclass, it needs to first call super() before using this.
    constructor(name, lives) {
        super(name);
        this.#lives = lives;
    }
    getLives() {
        return this.#lives;
    }
    loseLife() {
        this.#lives--;
    }
    eat() {
        console.log("nom nom");
    }
}

let myCat = new Cat('morris', 9);
myCat.speak();
myCat.eat();
myCat.loseLife();
console.log(myCat.getLives(), myCat.name);

//console.log(myCat.staticProperty);  // undefined
console.log(Cat.staticProperty);
console.log(Cat.staticMethod());
