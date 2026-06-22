let rnum= Math.floor(Math.random() * 100) + 1;
const prompt = require('prompt-sync')();
let count=1;
while(count <=100)
  {
    let unum=Number(prompt("Enter a number :"))
    if(unum==rnum)
    {
      console.log(`You guess the correct number in ${count} attempts`)
      count +=1;
      break
    }
    else if(unum >rnum)
    {
      console.log("Your number is greater than random number")
      count +=1;
    }
    else if(unum <rnum)
    {
      console.log("Your number is less than random number")
      count +=1;
    }
  }
let score =100 -count
console.log(`Your score is ${score}`)
console.log("Random number is ",rnum)
