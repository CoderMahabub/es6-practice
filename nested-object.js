//১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
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
        ojon: '1kg',
        pani: {
            total: 55500,
            waterColor: 'green'
        }
    }
};

const { name, address } = fish;
const { waterColor, total } = fish?.pukur?.pani;//১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
console.log(address, waterColor);
