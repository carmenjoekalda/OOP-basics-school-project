class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
    }
    getName(){
        return this.name
    } 
    addCourse(course) {
        if (this.courses.includes(course)) {
            return
        } else {
            this.courses.push(course)
        }
    }
    addStudent(student) {
        if (student.age() >= 7) {
            student.setId(this.students.length + 1);
            if (!this.students.includes(student)) {
                this.students.push(student);
            } else {
                return
            }
        }
    }
    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            course.addGrade(student, grade);
        }
    }
    getStudents() {
        return this.students
    }
    getCourses() {
        return this.courses
    }
    getStudentsOrderedByAverageGrade() {
        return this.students.slice().sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = {School} 