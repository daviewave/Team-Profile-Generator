//creating test
//1. import necessities
const Manager = require("../lib/Manager");

//2. create a 'dumby' object to test functions
const managerTest = new Manager("David", 3, "daviewave@gmail.com", 33);

//3. write test functions with asserted values
describe("Manager", () => {
  it("HAS THE CORRECT NAME: DAVID", () => {
    expect(managerTest.getName()).toEqual("David");
  });

  it("HAS THE CORRECT ID: 3", () => {
    expect(managerTest.getID()).toEqual(3);
  });

  it("HAS THE CORRECT EMAIL ADDRESS: daviewave@gmail.com", () => {
    expect(managerTest.getEmail()).toEqual("daviewave@gmail.com");
  });
  it("HAS THE CORRECT OFFICE NUMBER: 33", () => {
    expect(managerTest.getOffice()).toEqual(33);
  });
});
