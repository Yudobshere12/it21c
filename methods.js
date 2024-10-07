const person = {
    name: "Haide",
    age: 19,
    gender: "Female"
   }
  //Process and Output
  console.log("Hello love");
  console.log("Name: " + person.name);
  console.log("Age: "  +person.age);
  console.log("Gender: " + person.gender);  
  console.log("-----------------------------------");

    //Class named Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
     //Solution 1: Display via console.log
     displayInfo() { //Process and Output
        console.log("Name: " + this.name);
        console.log("Age: "  + this.age);
        console.log("Gender: " + this.gender);
     }