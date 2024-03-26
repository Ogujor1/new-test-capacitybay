console.log("Page successfully load js.");
var myName = 'Mike';
console.log(myName);
var website = 'https://google.com';
console.log(website);


if (myName == 'Mike'){
  let apples = '5';
  const height = "6'0";

  console.log("I am ", height, "tall");
  console.log("There are", apples, "apples");
}
/* Everything that will be written in this place will not be executed */
console.log ("Now you can execute it")

//Conditional function//
const age = 18
if (age >=18){
  console.log("You can fuck")
}
if (age >= 21){
  console.log("You can drink")
}
else{
  console.log("Alcohol is not for you")
}

// for loop function//
myNam = 'Mike'; myAge = 17
var details = `My name is ${myNam} and I am ${myAge}years old`
console.log(details)
var arr = ["zero", "one", "two", "three"];
for (let i=0; i < arr.length; i++){
  console.log(`${i} = ${arr[i]}`)
}
arr.forEach(num =>{
  console.log(num);
})

//Selecting with the class//
let elems = document.querySelectorAll(".this-class");
console.log(elems)

// Changing the text in a page//
let elements = document.querySelectorAll("li");
console.log(elements)
elements.forEach(i =>{
  i.innerText = "I am different Now!!!"
})

//Knowing what to Loop through//
elements.forEach((i, index) => {
  i.innerText = `Hello this is item: ${index+1}`
});

// adding a class to the page//
elements.forEach(i =>{
  i.classList.add("new=class", "second-class");
});