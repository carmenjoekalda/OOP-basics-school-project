const Person = require('./Person').Person;
class Student extends Person {
    constructor(name) {
        super(name);
        this.id = null;
        this.grades = [];
        this.setDateOfBirth(null);
    }
    setId(id) {
        if (this.id == null) {
            this.id = id
        } else {
            return
        }
    }
    getId() {
        return this.id
    }
    getGrades() {
        return this.grades
    }
    addGrade(course, grade) {
        this.grades.push({ course, grade });
        course.addGrade(this, grade);
    }
    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1
        } else {
            const total = this.grades.reduce((sum, gradeObj) => sum + gradeObj.grade, 0);
            this.averageGrade = total / this.grades.length
            return this.averageGrade
        }
    }
    description() {
        return "This student's name is " + this.name + ", they were born in " +
            this.birthyear + ", they are " + this.age() + " years old."
    }
}

module.exports = {Student}  