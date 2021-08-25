//১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const myWife = 'Afrin';
let habitOfMyWife = 'Kothay kothay agg kore';
habitOfMyWife = 'good girl';
console.log(myWife, 'is a', habitOfMyWife, '.');

myFamily = { name: 'dewan', member: 5, averageAge: 30 };
const { name, member, averageAge } = myFamily;

const family = `${myWife} is my wife name and ${name} is my surename and our average age is ${averageAge}.`;
console.log(family)

// 4. Difference between Js Function declaration and arrow function declaration
// 4.5 Difference among var let and const 


