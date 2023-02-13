const Employee = require("../lib/Employee.js")
describe("employee test",()=>{
    describe("Initialization", () => {
        it("makes an object", () => {
          const employee = new Employee();
    
          // Verify that the new object has the correct properties
          expect(typeof employee).toBe("object");
        });
      });
      describe("Employee values", () => {
        it("sets employee values", () => {
          const employee = new Employee("Fred","12345","fred@email.com");
    
          // Verify that the new object has the correct properties
          expect(employee.name).toBe("Fred");
          expect(employee.id).toBe("12345");
          expect(employee.email).toBe("fred@email.com");
        });
        it("gets employee values", () => {
            const employee = new Employee("Fred","12345","fred@email.com");
      
            // Verify that the new object has the correct properties
            expect(employee.getName()).toBe("Fred");
            expect(employee.getId()).toBe("12345");
            expect(employee.getEmail()).toBe("fred@email.com");
            expect(employee.getRole()).toBe("Employee")
          });
      });
})