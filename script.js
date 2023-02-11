/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((person) => {
    if (person.marks > 50) console.log(person);
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((person) => {
    if (person.marks > 50) console.log(person);
  });
}

function addData() {
  //Write your code here, just console.log
  const newPerson = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newPerson);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(arr.filter((person) => person.marks > 50));
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [
    { id: 4, name: "sharma", age: "13", marks: 20 },
    { id: 5, name: "yash", age: "22", marks: 65 },
    { id: 6, name: "yug", age: "29", marks: 77 },
  ];
  console.log([...arr, ...arr2]);
}
