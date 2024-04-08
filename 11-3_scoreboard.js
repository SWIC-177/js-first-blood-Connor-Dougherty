const add2Con2 = (con1, con2) => {con1 + con2;

    const scorePoints = {
        name: "Home",
        score: 00,
    };
    
    function scoreBoard(individual) {
        return (goodbye) => `${goodbye}, ${individual.name}!`;
    }
    
    const homePoints = scoreBoard(person);
    console.log(helloJames("Score"));
    
    
    
    const visitorPoints = scoreBoard ({
        name: "Visitor",
        age: 00,
    });
    
    console.log(visitorPoints("Score"));

    
    
    
    function createMarkiplier(factor){
        return function marketPlier(number){
            return number * factor;
        };
    }
    
    const pointOne = createMarkiplier(1);
    console.log(double(3));
    console.log(double(3));
    
    const pointTwo = createMarkiplier(3);
    console.log(double(3));
    console.log(double(3));
    
    const pointThree = createMarkiplier(6);
    console.log(double(3));
    console.log(double(3));
    
    const pointFour = createMarkiplier(9);
    console.log(double(3));
    console.log(double(3));
    
    const pointFive = createMarkiplier(12);
    console.log(double(3));
    console.log(double(3));