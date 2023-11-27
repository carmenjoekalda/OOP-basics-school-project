class Person {
    constructor(name) {
        this.name = name;
        this.birthyear = null;
    }
    setDateOfBirth(year) {
        this.birthyear = year;
    }
    getDateOfBirth() {
        return this.birthyear;
    }
    age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthyear
    }
    getName() {
        return this.name
    }
    description() {
        return "This person's name is " + this.name + ", they were born in " +
            this.birthyear + ", they are " + this.age() + " years old."
    }
}

module.exports = {Person} 