// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
// const numbers = [5, 4, 2, 9, 2, 4, 2, 5, 5, 6, 4, 72, 23];
// const number = numbers.map(number => number * 5);
// console.log(number);

const numbers = [ 12, 56, 52, 45, 14 ];
const half = numbers.map((n) => n / 2);
const double = numbers.map((num) => num * 2);
// console.log(half, double);

const friends = [ 'Tom Hanks', 'Tom Cruise', 'Tom Doe', 'Tom Solaiman' ];
const friend = friends.map((friend) => friend[0]);
const NameLength = friends.map((friend) => friend.length);
// console.log(NameLength);

const products = [
	{ id: 1, name: 'laptop', price: 45000 },
	{ id: 2, name: 'iphone', price: 80500 },
	{ id: 3, name: 'mobile', price: 4500 },
	{ id: 4, name: 'watch', price: 4000 },
	{ id: 5, name: 'tablet', price: 2500 }
];

// const items = products.map((product) => console.log(product.name));
const items = products.map((product) => product.name);
const prices = products.map((p) => p.price);
// console.log(items);
// console.log(prices);
