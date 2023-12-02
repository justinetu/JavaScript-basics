const person = {
    name: 'Harry Potter',    //Objects
    gender: 'Male'
};

const copyCat = {...person};   // Spread Operator
copyCat.name = 'Justin Etu'

const toArray = (...args) => {    // Rest Operator and arrow functions
    return args;
}

const objectArray = toArray(person, copyCat);  //Arrays

// console.log(objectArray.map(person => 'Person: ' + person
// ))

for (obj of objectArray) {    // Loops
    console.log(obj.name);
}