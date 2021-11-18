//creating test
//1. import necessities
const Engineer = require("../lib/Engineer");

//2. create a 'dumby' object to test functions
const engineerTest = new Engineer(
  "David",
  3,
  "daviewave@gmail.com",
  "daviewave"
);

//3. write test functions with asserted values
describe("Employee", () => {
  it("HAS THE CORRECT NAME: DAVID", () => {
    expect(engineerTest.getName()).toEqual("David");
  });

  it("HAS THE CORRECT ID: 3", () => {
    expect(engineerTest.getID()).toEqual(3);
  });

  it("HAS THE CORRECT EMAIL ADDRESS: daviewave@gmail.com", () => {
    expect(engineerTest.getEmail()).toEqual("daviewave@gmail.com");
  });
  it("HAS THE CORRECT GITHUB USERNAME: daviewave", () => {
    expect(engineerTest.getGithub).toEqual("daviewave");
  });
});
