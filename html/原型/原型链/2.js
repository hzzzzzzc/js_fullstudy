Person.prototype = {
    name: '0.0',
    sayName: function() {
        console.log(this.name);
    }
}

function Person() {
    this.name = '0.0.0'
}
var person = new Person()
console.log(person.sayName());