const person = {
    name: 'Jason Williams',
    age: 45,
    hometown: 'Ghana',
    greet() {
        console.log('Hi there! my name is ' + this.name);
    }
};

person.greet();