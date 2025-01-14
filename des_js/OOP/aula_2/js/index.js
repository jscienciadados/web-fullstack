function CreateCar(mark, model, ano, km) {
    this.carMark = mark;
    this.carModel = model;
    this.carAno = ano;
    this.carKm = km

}

// Constructor
const car1 = new CreateCar('AUDI', 'Q3 HATCH', 2024, 254)

console.log(car1)