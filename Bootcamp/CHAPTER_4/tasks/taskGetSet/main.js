// class Worker {
//     constructor(name, surname, rate, days){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary(){
//         return this.rate * this.days;
//     }
// }

// const worker1 = new Worker('Baiaman', 'Taalaibekov', 1500, 31);
// console.log(`${worker1.name} получает - ${worker1.getSalary()}$ за ${worker1.days} дней`);



//---------------------------------------------------------------------------

class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    
    get rate() {                              // достать
        return this._rate;
    } 

    get days() {
        return this._days;
    }

    set rate(val){
        this._rate = val;
    }
    set days(val){
        this._days = val;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    getName() {
        return this._name;
    }

    getRate() {
        return this._rate;
    }

    getDays() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}
const worker = new Worker('Иван', 'Иванов', 1500, 6);

worker.rate = 1000;
worker.days = 6;

console.log(worker.getName()); //выведет &#39;Иван&#39;
console.log(worker.getSurname()); //выведет &#39;Иванов&#39;
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31










