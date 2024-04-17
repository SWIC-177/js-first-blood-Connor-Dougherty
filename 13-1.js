const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 18 },
    { name: 'David', age: 40 }
  ];
  
  const updatedPeople = people.map(person => {
    return {
      name: person.name,
      age: person.age + 1
    };
  });
  
  console.log(updatedPeople);

  //results
  //[
    //{ name: 'Alice', age: 26 },
    //{ name: 'Bob', age: 33 },
    //{ name: 'Charlie', age: 19 },
    //{ name: 'David', age: 41 }
  //]