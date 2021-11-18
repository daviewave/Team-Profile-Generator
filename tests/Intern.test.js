//creating test
//1. import necessities
const Intern = require("../lib/Intern");

//2. create a 'dumby' object to test functions
const internTest = new Intern(
  "David",
  3,
  "daviewave@gmail.com",
  "Umass Amherst"
);

//3. write test functions with asserted values
describe("Intern", () => {
  it("HAS THE CORRECT NAME: DAVID", () => {
    expect(internTest.getName()).toEqual("David");
  });

  it("HAS THE CORRECT ID: 3", () => {
    expect(internTest.getID()).toEqual(3);
  });

  it("HAS THE CORRECT EMAIL ADDRESS: daviewave@gmail.com", () => {
    expect(internTest.getEmail()).toEqual("daviewave@gmail.com");
  });
  it("HAS THE CORRECT SCHOOL: Umass Amherst", () => {
    expect(internTest.getSchool()).toEqual("Umass Amherst");
  });
});
