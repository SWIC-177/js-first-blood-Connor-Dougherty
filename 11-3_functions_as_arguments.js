function greet(person) {
    return `Hiya, ${person}!`;
}

function proName(person, func) {
    
    return func(person);
}

console.log(proName('James', greet))