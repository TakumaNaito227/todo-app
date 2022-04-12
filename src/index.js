// const myProfile = {
//     name: 'hoge',
//     age: 30,
// };

// const {name, age} = myProfile;
// const messege = `名前は${name}です。年齢は${age}です。`
// console.log(messege);

const myProfile2 = ['hoge', 30];
const messege2 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`
console.log(messege2);

const [name, age] = myProfile2;
const messege4 = `名前は${name}です。年齢は${age}です。`
console.log(messege4);