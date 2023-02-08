// 8. Destructuring
//৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
const fish = {
	id: 58,
	name: 'King Hilsha',
	price: 9000,
	phone: '01555555555',
	address: 'Chandpur',
	dress: 'Silver',
	pukur: {
		kiase: 'mach',
		kotogula: 500,
		ojon: '1kg'
	}
};

const { id, name, price, pukur } = fish;
console.log(pukur);

// const { address, phone, price, dress, id } = fish;
const { kiase, kotogula } = fish.pukur;

// console.log(phone, price);
// console.log(phone);
// console.log(phone, dress);
// console.log(phone, id);
// console.log(address, phone);
// console.log(kiase, kotogula);
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(x, b);

// 9. destructuring an array
//৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
// const [p, q] = [45, 65, 34, 44];
// console.log(p, q);
const [ best, faltu, three ] = [ 'Manush', 'Kafer', 'My X' ];
// console.log(three);
