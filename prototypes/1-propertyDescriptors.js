
let person = { name: 'Mosh'}
console.log(person);
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false
});

person.name = 'Jalitha';
console.log(person);
