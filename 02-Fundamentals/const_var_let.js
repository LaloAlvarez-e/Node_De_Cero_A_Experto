//Var must not be used in new versions
//Var takes the varialbe name as global in all senses, it means no other scope can create the same variable name
// this is an issue if we want to have the same variable name inside a function or a different context
//But Var has some uses cases where we can take advantage of its scoping rules, if we want sync varialbes.
//a Var must be declared to be used
//Use Const whenerver it is possible
let myName = "laloa"; //Create a global variable


if(myName === "laloa") {
    myName = "Laloa";
}

console.log("My name is: " + myName);