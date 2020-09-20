// object literal
const car = {
    make: "Honda",
    "the model": "Accord LX",
    startCar: function () { console.log("car started"); }
}

car.year = 2012;
car['the model'] = "Accord LX-S";
car.startCar();
console.log(car);


class Car {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }

    startCar() {
        console.log("car started");
    }
}

const myCar = new Car("Honda", 2012);
console.log(myCar.make);
myCar.startCar();
