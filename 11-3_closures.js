const add2Con2 = (con1, con2) => {con1 + con2;

const person = {
    name: "James Martin",
    age: 21,
    isAdult: true, 
};

function makeHello(individual) {
    return (goodbye) => `${goodbye}, ${individual.name}!`;
}

const helloJames = makeHello(person);
console.log(helloJames("Greetings"));
console.log(helloJames("Hi, Hello, Good morning"));



const helloKate = makeHello ({
    name: "Kate Oxford",
    age: 45,
    isAdult: true, 
});

console.log(helloKate("Hi"));
console.log(helloKate("Hello"));
console.log(helloKate("Good morning"));



function createMarkiplier(factor){
    return function markiMoo(number){
        return number * factor;
    };
}

const three = createMarkiplier(3);
console.log(double(5));
console.log(double(10));

const six = createMarkiplier(6);
console.log(double(5));
console.log(double(10));

const threeTimestwo = createMarkiplier(9);
console.log(double(5));
console.log(double(10));

const sixTimestwo = createMarkiplier(12);
console.log(double(5));
console.log(double(10));

const threeTimesfive = createMarkiplier(15);
console.log(double(5));
console.log(double(10));
