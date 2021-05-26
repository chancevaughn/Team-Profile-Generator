const Employee = require("../lib/Engineer");

test("Makes an employee object", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Tests all functions of the object", () => {
    const e = new Employee('John', 32, "me@me.com", 'oceanwave');
    expect(e.getName()).toBe('John');
    expect(e.getId()).toEqual(32);
    expect(e.getEmail()).toBe("me@me.com");
    expect(e.getRole()).toBe('Engineer');
    expect(e.getGithub()).toBe('oceanwave')
})
