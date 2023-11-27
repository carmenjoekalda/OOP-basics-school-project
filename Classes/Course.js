class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }
    getGrades() {
        return this.grades
    }
    addGrade(student, grade) {
        this.grades.push({ student, grade })
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
        return this.name
    }
}

module.exports = {Course} 