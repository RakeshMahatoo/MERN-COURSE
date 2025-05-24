//1. =========OBJECT PROTOTYPE===========

function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      onclose.log(`hi, my name is ${name}`);
    },
  };
}

// let p1 = PersonMaker("adam",24);
// let p2 = PersonMaker("eve",25);       // so we add data to ye talk() function bar bar create ho rha hain which is enffieiency

//================ So there is another method call (NEW OPERATOR METHOD)==============

// Constructors - its does not return  and start with capital

function Person(name, age) {
  this.name = name; // consturcor ka create krne ka format
  this.age = age; // this ka mtlutb p1 and p2 ko point kr rha hain
}

Person.prototype.talk = function () {
  // Person name ka ek prototype property banayi hain
  console.log(`hi, my name is ${this.name}`);
};

// prototype mean talk() function jo hain wo prototype k under define hain usse p1 === p2 karne pe true aayega, because talk() function prototype k undr chala gya hain

let p1 = new Person("adam", 24); // new operator lets deeloper create an instance of a user-defined object type or of one of the built in object types that has a constructor function
let p2 = new Person("eve", 25); // instance created

// p1 and p2 ka dono ka function copy nhi banta ye sirf reference deta hain

// =================================3.CLASSES==========================================================================================

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`hi, This is ${this.name}`);
  }
}

let a = new Person1("adam", 25);
let b = new Person1("surya", 25);

// ================4. INGERITANCE =====================

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } // ye babane ka simple reason jo jo repeat ho rha hain code mein usko aalag se class bana k likh lenge

  talk() {
    console.log(`hi, this is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // name and age will call form person (super keyword)
    // this.name = name;
    // this.age = age;
    this.marks = marks;
  }
  // talk(){
  //     console.log(`hi, this is ${this.name}`);
  // }
}

<<<<<<< HEAD
let stu1 = new Student("adam", 25, 95);
=======
>>>>>>> e2ac89b (tow file upload oops and rest api)

class Teacher extends Person {
  //Teacher ko kasie pta lagega person se data lena hain by (extends keyword)
  constructor(name, age, marks) {
    super(name, age); // parent class constructor is being called
    // this.name = name;
    // this.age = age;
    this.marks = subject;
  }
  // talk(){
  //     console.log(`hi, this is ${this.name}`);
  // }
}

<<<<<<< HEAD
=======

let data = new Student("rakeh",23,98);
>>>>>>> e2ac89b (tow file upload oops and rest api)
