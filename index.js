// Utility
function print(tag, value){
    console.info(tag, value)
}
​
// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
    const grades = [15, 7, 9, 10, 13, 0, 10, 5, 14, 7]
    // return the array
    return grades;
}
// display value
// print(`Scores Array:`, scores())
print('Scores Array:', scores())
​
​
// TODO: Access an element from the array
function accessScore(){
    // using array above access the 3rd element
    const grades = scores()
    const third = grades[2]
    // return the elememt
    return third;
}
​
// display value
// print(`Third Score:`, accessScore())
print('Third Score:', accessScore())
​
// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const nested = [[45, 90],[33, 65], 8]
    // return the nested arrays
    return nested;
}
// display value
// print(`Nested Score Array:`, nestedScores())
print('Nested Score Array:', nestedScores())
​
// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const grades = scores()
    const size = grades.length
    // return the number of elements
    return size;
}
// display value
// print(`Number of elements:`, getNumberOfScores())
print('Number of elements:', getNumberOfScores())
​
// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const grades = scores()
​
    //push => adds the new element
    grades.push(23, 45, 12, 0)
​
    //unshift => add the new element(front)
    grades.unshift(true, true)
​
    //shift => remove element from the front
    grades.shift()
​
    //pop => removes one element from every end of the array
    grades.pop()
​
    // return the new array with the elements that have been added
    return grades;
}
// display value
// print(`Added elements:`, addElement())
print('Added elements:', addElement())
​
​
// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object
    const student = {
        name:"Alex Irungu Muiruri",
        age: 23,
        email: 'alex.irungu@student.moringaschool.com',
        studentNumber: '0719571601',
        isKenyan: true
    }
    const computer = {
        "Laptop-model !" : 'HP 14'
        
    }
    // return student object
    return student;
}
// display value
// print(`Student:`, student())
print('Student:', student())
// TODO: Access student's age
function studentAge(){
    // access student age using key
    const learner = student()
​
    //using square brackets
    //works for both (plain and quoted)
    age = learner["age"]
​
    //using dop operator
    //limited to plain keys
    age = learner.age
​
    // return student age
    return learner["age"]
}
// display value
// print(`Student Age:`, studentAge())
print('Student Age:', studentAge())
​
// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator
    const message = student()
    email = message.email
​
    // return student email
    return message.email
}
// display value
// print(`Student Email:`, studentEmail())
print('Student Email:', studentEmail())
​
// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    const userDetails = {
        id: "36707878",
        name: "Alex Irungu Muiruri",
        course: {
            name: "Software Development",
            number: 56
        }
    }
​
    // return user object
    return userDetails
}
// display value
// print(`User:`, user())
print('User:', user())
​
//access student details
​
const details = user()
​
//dot operator
let cnum = details.course.number
// []
cnum = details["course"]["number"]
// dot operator, []
​
cnum = details.course["number"]
​
​
//print
console.log("cnum:", cnum)
​
// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries
    const keys = Object.keys(details)
​
    // return entries
    return keys
}
// display value
// print(`User Entries:`, getUserEntries())
print("User Entries:", getUserEntries() )
​
// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys
​
​
    // return keys
​
}
// display value
// print(`User Keys:`, getUserKeys())
​