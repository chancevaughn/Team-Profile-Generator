const Employee = require("../lib/Manager");

test("Makes an employee object", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Tests all functions of the object", () => {
    const e = new Employee('John', 32, "me@me.com", 413);
    expect(e.getName()).toBe('John');
    expect(e.getId()).toEqual(32);
    expect(e.getEmail()).toBe("me@me.com");
    expect(e.getRole()).toBe('Manager');
    expect(e.getOfficeNumber()).toBe(413)
})
