const Employee = require("../lib/Employee");

test("Makes an employee object", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Tests all functions of the object", () => {
    const e = new Employee('John', 32, "me@me.com");
    expect(e.getName()).toBe('John');
    expect(e.getId()).toEqual(32);
    expect(e.getEmail()).toBe("me@me.com");
    expect(e.getRole()).toBe('Employee');
})

// test("Id is accessible on the Employee class", () => {
//     const e = new Employee(52);
//     expect(e.id).toEqual(52);
// })

// test("Email is accessible on the Employee class", () => {
//     const e = new Employee("me@me.com");
//     expect(e.getEmail()).toBe("me@me.com");
// })

// test("Role is accessible on the Employee class", () => {
//     const e = new Employee('Employee');
//     expect(e.getRole()).toBe('Employee');
// })