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
console.log(fruits.push("Pineapple"), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.splice(1,0,"straberry"), fruits)
console.log(fruits.indexOf("Mango"),fruits);
console.log(fruits.splice(3,1), fruits);
console.log(fruits.sort(), fruits);
console.log(fruits.reverse(), fruits);
                                     */




  // **********************Task 3: Object Constructor Function**************************
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.greet = function greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// creating three instances of function Person
const person1 = new Person('hafeez', 20, "Male" )
const person2 = new Person("Sufiyan", 22, "Male")
const person3 = new Person("Madani", 21, "Male")

// console.log(person1);
// console.log(person1.greet())


// console.log(person2);
// console.log(person2.greet())


// console.log(person3);
// console.log(person3.greet())



  // **********************Task 4: Object Manipulation and Nested Object Access**************************

  const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2025,
    features : ["Air Conditioning", "Sunroof", "Bluethooth"]
  }

  car.features.push("mileage")
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

  console.log(Student[1].grade.science) // retrieve the science grade of the second student
  console.log(Student[0].grade.math = 95); //Update the math grade of the first student.
  console.log(Student[0].grade.English = 99) //Add a new subject and grade to one of the students.

    console.log(Student);



