const users = [
  {
    name: "thamitha",
    age: 55,
  },
  {
    name: "nimal",
    age: 30,
  },
  {
    name: "saman",
    age: 25,
  },
  {
    name: "kamal",
    age: 35,
  },
];

function sortingByAge() {
  const data = users.sort((a, b) => a.age - b.age);
  return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;
