const hobbies = ['Backpacking', 'Coding', 'Fishing'];
for (let hobby of hobbies) {
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)

const addDollarSign = state => state + '$' 

const states = ['Alabama', 'Kentucky', 'Houston'];
console.log(states)
console.log(states.map(state => 'State: ' + state))

