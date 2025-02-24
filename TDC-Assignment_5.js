const sentence = "JavaScript is a powerful and popular programming language."

// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());
// console.log(sentence.indexOf('popular'));

// console.log(sentence.slice(16,24));
// console.log(sentence.replace("JavaScript", "JS"));

// console.log(sentence.includes('language'));


//****************Task 2: Array and Array Methods***************************** */

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

/*
console.log(fruits.push("Pineapple"), fruits);    // Push() Method is used to add the element in the array
console.log(fruits.shift(), fruits);              // Shift() Method is used to remove the element from begining in the array
console.log(fruits.splice(1,0,"straberry"), fruits) // splice() Method is used to add the element in the middle of the array by just give the index value
console.log(fruits.indexOf("Mango"),fruits);       // indexOf() Method is used to find the index value of element in a array 
console.log(fruits.splice(3,1), fruits);            
console.log(fruits.sort(), fruits);                 //sort() Method is used to sort the element in alphabetical order
console.log(fruits.reverse(), fruits);              // reverse() Method is used to reverse the element of array
                                     */




  // **********************Task 3: Object Constructor Function**************************
function Person(name, age, gender) {         // we created Person Constructor Function
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.greet = function greet() {           // we created greet() Method 
        console.log(`Hello, my name is ${this.name}`);
    }

    this.isAdult = function() {               // we created idAdult() Method to check the person is adult or not
      return console.log(this.age>=18? true : false); 
    }

    this.checkAdult = function() {    // isAdult() Method that returns true if the age is 18 or above, otherwise false.
      this.age>=18? this.name : false;
    }

}
// creating three instances of function Person
const person1 = new Person('hafeez', 7, "Male" )
const person2 = new Person("Sufiyan", 22, "Male")
const person3 = new Person("Madani", 31, "Male")

  const people = [person1,person2,person3];
    const adult = people.filter()

console.log(person1);
person1.greet()
person1.isAdult()
// console.log("Adults", adult);

// console.log(person2);
// person2.greet()


// console.log(person3);
// person3.greet()



  // **********************Task 4: Object Manipulation and Nested Object Access**************************

  const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,
    features : ["Air Conditioning", "Sunroof", "Bluethooth"]
  }

  car.features.push("mileage")       // push() method add the mileage property to car
  delete car.model
//   console.log(car);



  // **********************Task 5: Accessing Nested Objects in an Array**************************

  const Student = [
     {
        name : "hafeez",
        age : 20,
        grade : {
            math: 90,
            science: 85,
        }
    },
    
    {
        name : "ahmed",
        age : 14,
        grade : {
            math: 70,
            science: 65,
        }
    }

  ]

  // console.log(Student[1].grade.science) // retrieve the science grade of the second student
  // console.log(Student[0].grade.math = 95); //Update the math grade of the first student.
  // console.log(Student[0].grade.English = 99) //Add a new subject and grade to one of the students.

    // console.log(Student);



