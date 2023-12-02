const name = 'Anthony'
let age = 33
let hasLicense = false

const canDrive = (userName, userAge, userHasLicense) => {
    if(userAge >= 16) {
        if(userHasLicense) {
            return userName + 
            ' is eligible to drive '
            + 'because they are of age'
            + ' and have a license'
        }
        else {
            return userName + 
            ' is old enough to drive'
            + ' however, they do not '
            + 'have a license'
        }
    }
    else {
        return (
            userName + ' cannot drive at all :('
        );
    }
}

const add = (first, second) => first + second;

const doubleNum = (number) => number * 2;

console.log(canDrive(name, age, hasLicense))
console.log(add(3,5))
console.log(doubleNum(20))
