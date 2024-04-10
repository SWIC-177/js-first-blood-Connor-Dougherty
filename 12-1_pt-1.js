const person = {
    name: "John Doe",
    age: 23,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };
  
  // my work vvvvvv
  const otherPerson = { ...person, hobbies: ["drawing"]};
  
  otherPerson.name = "Jane Doe";
  otherPerson.age = "26";
  
  console.log(`Person's name is: ${person.name}`);
  console.log(`Other Person's name is: ${otherPerson.name}`);