// Updating immutable objects functionally
const person = { 
    name: "John",
    address: {
        country: "USA",
        city: "SF"
    }
}
const updated = Object.assign({}, person, {name: "Bob", age: 30})
const updated2 = {...person, name: "Bob",}
console.log(updated);

// both object.assign and the spread operator "..." do a shallow copy.  That means that
// the address still maintains a reference to the original person
