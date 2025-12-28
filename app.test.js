const sortingByAge = require("./app");

test("testing if the first user is elon after sorting", () => {
  const sortedData = sortingByAge();
  expect(sortedData[0].name).toBe("saman");
});

test("testing if the last user is thamitha", () => {
  const sortedData = sortingByAge();
  expect(sortedData[sortedData.length - 1].name).toBe("thamitha");
});

test("testing if the length of users  after sorting", () => {
  const sortedData = sortingByAge();
  expect(sortedData.length).toBe(4);
});
