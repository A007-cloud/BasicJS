/* 
// var means variable, it can store data value that can be changed later on.
var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return ( 
    'Name is ' +
    userName +
    ', age is '+
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby );
}

console.log(summarizeUser(name, age, hasHobbies)); 
*/


/*
const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;
// value assigned in let can change after assigning but in case of const it can't.

function summarizeUser(userName, userAge, userHasHobby) {
    return ( 
    'Name is ' +
    userName +
    ', age is '+
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby );
}

console.log(summarizeUser(name, age, hasHobbies));
*/



/*
// Arrow function
const name = 'Max';
let age = 29;
const hasHobbies = true;

const summarizeUser = ((userName, userAge, userHasHobby) => {
    return ( 
        'Name is ' +
        userName +
        ', age is '+
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby );
});

console.log(summarizeUser(name, age, hasHobbies));

*/

/*
const add = (a, b) => a + b;
console.log(add (1, 2));
*/

/*
const addOne = a => a + 1;
console.log(addOne(2));
*/

/*
const addRandom = () => 1 + 2;
console.log(addRandom());
*/

/*
const product = (a, b) => a * b;
console.log(product(1, 2));
*/

/*
// use of this keyword
const student = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
student.greet();
*/


/*
// Arrays & Methods 
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
*/


/*
// understanding Spread Operator
const hobbies = ['Sports', 'Cooking'];

const copiedArray = [...hobbies];
console.log(copiedArray);

const student = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedStudent = {...student};
console.log(copiedStudent);
*/

/*
// Understanding Rest Operator

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4)); // you can add more items in it to add further values
*/

/*

// Understanding Destructuring
const student = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(student);

const { name, age } = student;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

*/

/*

//Async Code And Promises
async function getData() {
    console.log('a');
    const data1 = await new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('b')
        }, 1000)
    });
    console.log(data1);
    console.log('c');
    const data2 = await new Promise((resole, reject) => {
        setTimeout(() => {
            resole('d')
        }, 2000)
    });
    console.log(data2);

    console.log('e');

}
getData();

*/