class Animals {
    constructor(type, name, hairColor, voice) {
        this.type = type;
        this.name = name;
        this.hairColor = hairColor;
        this.voice = voice;
    }
    castVoise () {
        console.log(`${this.name} says ${this.voice}`);
    }
}


// const dog1 = new Animals('dog', 'Jack', 'black', 'tyaf');
// const dog2 = new Animals('dog', 'Ditch', 'blue', 'gav')
// const cat1 = new Animals('cat', 'Barsik', 'red', 'meaw')
// dog1.castVoise()
// dog2.castVoise()
// cat1.castVoise()

class Human extends Animals {
    constructor(name, hairColor, voice, power, intel) {
        super('human', name, hairColor, voice);

        this.power = power; //0-100
        this.intel = intel; //0-100
    }

    static exempleOfObject(){//Статичные методы или свойтва преднадлежат
        return new this('NameOfHuman', 'brown', 'talk', 100, 100);
    }

    static className = 'Some';

    learnJavaScript(){
        const intel = this.intel / 10;
        let stydyHours = 0;
        for(let i=1; i<=1000; i=i+intel){
            stydyHours++;
        }
        super.castVoise();
        console.log(`I learned a JS in ${stydyHours} hours`);
    }
}

const human1 = new Human('Jack', 'brown', 'talk', 100, 75);
const human2 = new Human('John', 'black', 'talk', 50, 95);

// human1.learnJavaScript();
// human2.learnJavaScript();

// let arr = [1,2,3]
// console.log(arr)


//Приватные свойства

class Rectangle {
    constructor(width, heigth){
        this._width = width
        this._heigth = heigth
        this.widthInCentimaters = width * 100;
        this.heigthInCentimaters = heigth * 100;
    }

    set width(value){
        this._width = value;
        this.widthInCentimaters = value * 100;
    }
    set heigth(value){
        this._heigth = value;
        this.heigthInCentimaters = value * 100;
    }

    get width(){
        return this._width;
    }
    get heigth(){
        return this._heigth;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.width * this.heigth
    }
}

const square = new Rectangle(10, 10);
// console.log(square)
// console.log(square._width)


square.width = 15;
square.heigth = 15;
console.log(square)








