// / HOW TO CREATE AN ARRAY ///

let arr = [] 

// / HOW TO PRINT ELEMENT IN ARRAY ///
let arr = [20,30,40,50,100]

// First element of array //
console.log(arr[0]);

// last element of array //
console.log(arr[4]);
or //
console.log(arr[arr.length-1]);

// / HOW TO ADD ELEMENT TO AN ARRAY ///
// using the arr.push method //
let arr = [20,30,40,50,100]

arr.push(200)
console.log(arr);


// / HOW TO FILTER OUT ELEMENTS IN ARRAY ///
// using the arr.filter method arr.filter(()=>{} which accepts a callback function) //

let arr =[20,30,40,50,100]
// mtd 01 //
arr.filter((element)=>{
console.log(element);
})

// mtd 02 //
// How to filter out elements less than 50 //

let newArr = arr.filter((element)=>{
console.log(element);
if (element < 50) {
    return true;
}
})

console.log(newArr);


// How to filter out elements less than 50  or greater than in a short code form//
// mtd 01 //

let newArr = arr.filter(element => {
    return element < 50;
})

console.log(newArr);

// mtd 02 //
let newArr = arr.filter(element => element >= 50)
console.log(newArr);



// / WORK ///
// EG01 //
let grades = ['A+', 'A' , 'FAIL']
let newGrades = grades.filter(element => element < 'FAIL')
console.log(newGrades);


// EG02 //
let grades = ['FAIL','FAIL','B']
let newGrades = grades.filter(element => element < 'FAIL','FAIL')
console.log(newGrades); 


// EG03 //
let grades = ['FAIL']
let newGrades = grades.filter(element => element < 'FAIL')
console.log(newGrades);  


// Using Loops for .filter question //
let grades = ['A+','A','FAIL']
let goodGrades =[]

for (let i =0 ; i < grades.length; ++i){
    if (grades[i] !== 'FAIL'){
        goodGrades.push(grades[i]);
    }
}
console.log(goodGrades);


// / HOW TO USE THE ARRAY.MAP METHOD ///
let arr = [1,4,9,16]

arr.map((element) => {
    console.log(element);
})

// TO MAP THE ELEMENT//

let arr = [1,4,9,16]

let newArr = arr.map((element) => {
    console.log(element);
    return 'siddiq';
})

console.log(newArr);

// mtd 02 //
let newArr =arr.map(element => {
    return 'Abubakar';
})

console.log(newArr);

// mtd 03 //
let newArr = arr.map(element => 'Mohammed')
console.log(newArr);


// / WORK ///

// Turn each element in an array of dollars into cents //
let dollars = [1,5,10,3]
let cents = dollars.map(element => {
    return element * 100;
})

console.log(cents);

// mtd 02 //
let cents = dollars.map(element => element * 100)
console.log(cents);

// / Using Loops ///

let dollars = [1,5,10,3]
let cents =[]
for (let i = 0; i < dollars.length; ++i){
    cents.push(dollars[i] * 100);
}
console.log(cents);

// EG02 //
let dollars = [0,10,20]
let cents = []
for (let i = 0 ; i < dollars.length; ++i){
    cents.push(dollars[i] * 100);
}
console.log(cents);