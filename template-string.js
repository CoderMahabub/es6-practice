const myWife = 'Afrin';
let habitOfMyWife = 'Kothay kothay agg kore';
habitOfMyWife = 'good girl';
console.log(myWife, 'is a', habitOfMyWife, '.');

myFamily = { name: 'dewan', member: 5, averageAge: 30 };
const { name, member, averageAge } = myFamily;

//২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
const family = `${myWife} is my wife name and ${name} is my surename and our average age is ${averageAge}.`;
console.log(family);