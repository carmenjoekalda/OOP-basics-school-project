const express=require('express')
const school = require('../data/example.js')

const getSchoolName = (req, res) => {
    if(school.getName() === req.params.name){
        res.json({name: school.name})
    } 
}

const getSchoolStudents = (req, res) => {
    res.json({students: school.getStudents()})
} 

const getSchoolCourses = (req, res) => {
    res.json({courses: school.getCourses()})
} 

module.exports = {
    getSchoolName,
    getSchoolStudents,
    getSchoolCourses
} 