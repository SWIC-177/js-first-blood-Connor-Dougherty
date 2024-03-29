//function greet(name) {
//  console.log("Hello, " + name + "!");
//}

//greet("Connor");


const person = {
  name: "John",
  age: 17,
};

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

const adultMessage = verifyAdulthood(personName, personAge);

console.log(adultMessage);