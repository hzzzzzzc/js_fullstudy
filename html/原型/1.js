// Person.prototype --原型
Person.prototype.name = 'jiajun'
Person.prototype.say = function(){
    console.log('giao');
}
function Person() {
    // this.name = "wn"
}

var person = new Person()
console.log(person.name);
var person1 = new Person()
console.log(person1.name);

person.say()