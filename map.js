// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
// const numbers = [5, 4, 2, 9, 2, 4, 2, 5, 5, 6, 4, 72, 23];
// const number = numbers.map(number => number * 5);
// console.log(number);

const numbers = [ 12, 56, 52, 45, 14 ];
const half = numbers.map((n) => n / 2);
const double = numbers.map((num) => num * 2);
// console.log(half, double);

const friends = [ 'abd', 'bcd', 'def', 'fgh' ];
const friend = friends.map((friend) => friend[0]);
const NameLength = friends.map((friend) => friend.length);
console.log(NameLength);
