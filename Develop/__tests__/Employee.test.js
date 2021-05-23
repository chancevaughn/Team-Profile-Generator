const Employee = require("../lib/Employee");

test("Makes an employee object", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Name is accessible on the Employee class", () => {
    const e = new Employee('John');
    expect(e.getName()).toBe('John');
})