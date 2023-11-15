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

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
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

/*
// test person class
const person1 = new Person('John Smith')
person1.setDateOfBirth(2003)
console.log(person1)
console.log(person1.description())

// create a school
const voco = new School('voco')

// add courses
const math = new Course('math');
const english = new Course('english');
const physics = new Course('physics');
voco.addCourse(math);
voco.addCourse(english);
voco.addCourse(physics);


// test student class
const student1 = new Student('Jenna Smith')
voco.addStudent(student1);
console.log(student1.getGrades().map(({ course, grade }) => ({ course: course.description(), grade })))
student1.setId(1)
student1.setDateOfBirth(2002)
console.log(student1)

// add grades
student1.addGrade(math, 3)
student1.addGrade(english, 5)
student1.addGrade(physics, 4)
console.log(student1.description())


// add more students and math grades
const student2 = new Student('Bella smith')
voco.addStudent(student2)
student2.addGrade(math, 5)

// course test (math grades & average grade)

console.log(math.getGrades().map(({ student, grade}) => ({ student: student.name, grade})))
console.log(math.getAverageGrade())

// school test
console.log(voco.getStudents())
console.log(voco.getCourses())
*/