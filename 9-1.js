const name = Connor;
const age = 18;

function verifyAdulthood (x,y) {
    if  (x >= 18) return `Welcome, ${y}!`;
    return `You are not old enough to enter, ${y}.`;
}

const screenOutput = verifyAdulthood(age,name);

console.log(screenoutput);
