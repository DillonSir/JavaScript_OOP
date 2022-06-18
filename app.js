console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// class Person {
//   constructor(name, pets, residence, hobbies) {
//     this.name = name;
//     this.pets = pets;
//     this.residence = residence;
//     this.hobbies = hobbies;
//   }
//   addHobby(newHobby) {
//     this.hobbies.push(newHobby);
//   }
//   removeHobby(hobby) {
//     let foundIdx = this.hobbies.indexOf(hobby);
//     let valuesBefore = this.hobbies.slice(0, foundIdx + 1);
//     this.hobbies = valuesBefore.concat(valuesAfter);
//   }
//   greeting() {
//     console.log("Hello fellow person!");
//   }

//   info() {}
// }

// console.log("EXERCISE 2:\n==========\n");

// class Coder extends Person {
//   constructor(name, pets, residence, hobbies, occupation) {
//     super(name, pets, residence, hobbies);
//     {
//       super(name, pets, residence, hobbies);

//       this.occupation = occupation;
//     }
//   }
//   greeting() {
//     console.log("Hello, I'm a coder.");
//   }
// }

// console.log("EXERCISE 3:\n==========\n");

// let coder = new coder(
//   "Dillon",
//   2,
//   "Portsmouth",
//   ["Gaming", "Watching shows", "Working out"],
//   "Student"
// );
// coder.addHobby("Racing");
// console.log(coder);
// coder.removeHobby("Working out");
// console.log(coder);
// coder.greeting();
// console.log(coder.toString());

// Person.addHobby("Running");

console.log("EXERCISE 4:\n==========\n");

class Calculator {
  result = 0;

  add(a, b) {
    let res;
    if (b == undefined) {
      res = this.result + a;
    } else {
      return a + b;
    }
    this.result = res;
    return this.result;
  }

  subtract(a, b) {
    let res;
    if (b == undefined) {
      res = this.result - a;
    } else {
      return a - b;
    }
    this.result = res;
    return this.result;
  }

  multiply(a, b) {
    let res;
    if (b == undefined) {
      res = this.result * a;
    } else {
      return a * b;
    }
    this.result = res;
    return this.result;
  }

  divide(a, b) {
    let res;
    if (b == undefined) {
      res = this.result / a;
    } else {
      return a / b;
    }
    this.result = res;
    return this.result;
  }

  display() {
    console.log(this.result);
  }
}

let calc = new Calculator();

calc.add(6);
calc.display();
calc.subtract(2);
calc.display();
calc.multiply(5);
calc.display();
calc.divide(4);
calc.display();
