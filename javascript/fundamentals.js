// // Variables
// let name = "Sinan";
// let age = 23;

// // Output
// console.log(name);
// console.log(age);

// // Conditional statements
// if (age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a minor");
// }

// // Loops
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

//string methods

// let name = "sinan paravath"
// let result = name.split("")
// console.log(result)

// let skills = "html css javascript react redux python django rust go celery"
// let split = skills.split(" ")
// console.log(split)

// let fullName = "sinan paravath rishin"
// let name = fullName.split(" ")
// let firstName = name[0]
// let secondName = name[2]
// console.log(firstName)
// console.log(secondName)

// let name = "sinan-paravath"
// let result = name.split("-")
// console.log(result)

// let date = "2023 10-11"
// let result = date.split(" ")
// console.log(result)

// url path extraction task

// let url = "https://example.com/products/laptop"
// let extract = url.split("/")
// console.log(extract)


// word counter
// let sentence = "javascript is fun to learn"
// let words = sentence.split(" ")
// console.log("Total Words:", words.length)

//shopping cart product list

// let cart = "iphone,macbook,airpods,Apple watch"
// let products = cart.split(",")
// for(let i=0;i<products.length;i++){
//     console.log(`${i+1}: ${products[i]}`)
//     console.log(i+1 + ": " + products[i])
// }


// slice


// let name = "javascript"
// console.log(name.slice(4,10))


// Create a product description preview that only displays the first 30 characters

// let sentence = "Create a product description preview that only displays the first 30 characters"
// console.log(sentence.slice(0,31))

// banking applications

// let phone = "1234567890"
// let lastFour = phone.slice(-4)
// console.log("XXXXXX" + lastFour)


// touppercase

// let name = 'sinan'
// console.log(name.toUpperCase())

//lowercase

// let name = 'SINAN'
// console.log(name.toLowerCase())


// replace()

// let message = 'i love python'
// let result = message.replace('python', 'javascript')
// console.log(result)

// let message = 'hello user, welcome user'
// let result = message
//     .replace(/hello/g, 'welcome')
//     .replace(/user/g, 'javascript')
//     console.log(result)

//trim()

// let name = '  sinan  '
// console.log(name.trim())


// for of loop through array

// let numbers = [45,12,89,34,67]
// let lowestValue = numbers.sort((a,b) => a-b)[0] // find the smallest number
// console.log(lowestValue)

// count vowels

// let sentence = "javascript programming"
// let vowels = "aeiou"
// let counter = 0
// for(let char of sentence){
//     if(vowels.includes(char)){
//         counter++
//     }
// }
// console.log("Total vowels: ", counter)

// print array & find sum of the array

// let array = [10,20,30,40,50]
// let sum = 0
// for(let num of array){
//     sum +=num
// }
// console.log(sum)

// count of even numbers

// let array = [12,7,8,15,20,31]
// let count = 0
// for(let even of array){
//     if(even%2===0){
//         count++
//     }
// }
// console.log(count)


// find the largest number without using Math.max

// let array = [15,45,23,89,12]
// let ascending = array.sort((a,b) => b-a)[0]
// console.log(ascending)


//count vowels in an array of words

// let fruits = ["apple","banana","orange"]
// let vowels = 'aeiou'
// let count = 0
// for(let char of fruits){
//     if(fruits.includes(char)){
//         count++
//     }
// }
// console.log(count)


// find duplicate elements

// let array = [10,20,30,20,40,10,50]
// let duplicate = []
// for(let num of array){
//     if(array.indexOf(num) !== array.lastIndexOf(num)){
//         if(!duplicate.includes(num)){
//             duplicate.push(num)
//         }
//     }
// }
// console.log(duplicate)

// forEach()

// let products = [
//     {name:"Laptop", price: 50000},
//     {name:"Mouse", price: 1000},
//     {name:"keyboard", price: 2000},
//     {name:"monitor", price: 15000}
// ]
// products.forEach((product) =>{
//     console.log(product.name + " costs " + product.price)
// })


// functions and modern javascript learning and tasks


// let numbers = [2,3,4,5]
// console.log(numbers.map(num => num**2))


// function calculateTotal(a,b){
//     return a + b
// }
// // let result = calculateTotal(10,20)
// // console.log(result)

// //closure

// // Task: Bank Account

// function bankAccount(){
//     let balance = 1000
//     return{
//         deposit: function(amount){
//             balance +=amount
//             console.log("Deposited: ", amount)
//             console.log("Current balance: ", balance)
//         },
//         withdraw: function(amount){
//             if(amount<=balance){
//                 balance -=amount
//                 console.log("Withdrawn: ", amount)
//                 console.log("Current balance: ", balance)
//             }
//             else{
//                 console.log("Insufficient balance")
//             }
//         },
//         checkBalance: function(){
//             console.log("Current balance: ", balance)
//         }
//     }
// }

// const account = bankAccount()
// account.deposit(500)
// account.withdraw(200)
// account.checkBalance()


// function greet(name, callback){
//     console.log("Hello, " + name)
//     callback()
// }
// function welcome(){
//     console.log("welcome to our application")
// }
// greet("sinan", welcome)

// spread operator

// const array = {name: "sinan", age: 23}
// const updated = {...array, location: "malappuram"
// }
// console.log(updated)

// array destructuring

// let skills = ['html','css','javascript']
// let [first,second] = skills
// console.log(first)
// console.log(second)

// object destructuring

// let employee = {
//     name: "sinan",
//     age: 23,
//     salary: 4400
// }

// let {name:"rahul",age,salary} = employee

// // console.log(name)

// //local storage

// let user = {
//     name: "sinan",
//     age: 23
// }
// localStorage.setItem("user",JSON.stringify(user))
// let storedUser = JSON.parse(localStorage.getItem("user"))
// console.log(storedUser.name)


// find odd sum from an array using iteration method

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const oddNumbers = numbers.filter(num => num % 2 !== 0)
// const oddSum = numbers.reduce((total,num) => total + num,0)
// console.log("Odd numbers: ", oddNumbers)
// console.log("Odd total sum: ", oddSum)

// const students = [
//     {name: "sinan", score: 50},
//     {name: "rishin", score: 60},
//     {name: "mayis", score: 80}
// ]

// const studentScore = students.filter(num => num.score>75).map(students => students.score)
// console.log(studentScore)