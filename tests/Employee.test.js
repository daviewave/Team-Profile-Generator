//creating test
//1. import necessities
const Employee = require("../lib/Employee");

//2. create a 'dumby' object to test functions
const employeeTest = new Employee("David", 3, "daviewave@gmail.com");

//3. write test functions with asserted values
describe("Employee", () => {
  it("HAS THE CORRECT NAME: DAVID", () => {
    expect(employeeTest.name).toEqual("David");
  });

  it("HAS THE CORRECT ID: 3", () => {
    expect(employeeTest.id).toEqual(3);
  });

  it("HAS THE CORRECT EMAIL ADDRESS: daviewave@gmail.com", () => {
    expect(employeeTest.email).toEqual("daviewave@gmail.com");
  });
});
