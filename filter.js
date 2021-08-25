// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const numbers = [5, 4, 2, 9, 2, 4, 2, 5, 5, 6, 4, 72, 23];
const OddNumbers = numbers.filter(number => number % 2 == 1);
console.log(OddNumbers);

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
// map() in array
//The map() method creates a new array with the results of calling a function for every array element.
// The map() method calls the provided function once for each element in an array, in order.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// forEach() in array
//The forEach() method calls a function once for each element in an array, in order.
// forEach() is not executed for array elements without values.

//filter() in array
// The filter() method creates an array filled with all array elements that pass a test (provided by a function).
// filter() does not execute the function for empty array elements.
// filter() does not change the original array.

// find() in array
// The find() method returns the value of the array element that passes a test (provided by a function).
// The method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
// find() does not execute the function for empty array elements.
// find() does not change the original array.
