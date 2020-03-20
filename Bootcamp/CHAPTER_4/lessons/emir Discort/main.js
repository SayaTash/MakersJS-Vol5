// class Animal{
//     constructor(type, name, weigth, color, voice){
//         this.type = type;
//         this.name = name;
//         this.weigth = weigth;
//         this.color = color;
//         this.voice = voice;

//         // this.say = function(){
//         //     console.log(this.voice)
//         // }
//     }
//     say(){
//         console.log('hello world')
//     }
// }
// let obj = new Animal('cat', 'barsik', 5, 'white', 'muyau');
// let obj2 = new Animal('cat', 'barsik', 5, 'white', 'muyau');
// let obj3 = new obj.__proto__.constructor('dog', 'hak', 5, 'black', 'gaf');

// console.log(obj3);

// // obj.say()


// // Animal.prototype.say = function(){
// //     console.log('qwerty');
// // }

// // obj.say = function(){
// //     console.log('cubik')
// // }

// // obj.say()
// // obj2.say()


// class Human extends Animal{
//     constructor(){
//         super(...arguments);
//     }
//     say(){
//         console.log(this.name + 'say-' + this.voice)
//     }
// }

// let man1 = new Human('man','Fais',100,'black', 'easy');
// console.log(man1)

// class SomeClass{
//     _health = 100;
//     set health(val){
//         if(isNaN(+val) || typeof val !=='number'){
//             return;
//         }
//         this._health = val;
//     }
//     get health(){
//         return this._health + 'hp';
//     }
// }

// let obj = new SomeClass();
// console.log(obj)

console.log('Hello World')





