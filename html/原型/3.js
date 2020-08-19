
Person.prototype.lastName = 'FU'
function Person(name) {
    this.name = name
}
var person = new Person('金龙')
// person.lastName = 'Yu'
delete person.lastName
console.log(person.lastName);
console.log(Person.prototype);
//constructor 为了让Car()构造出的所有的对象都能找到它的自己的构造器