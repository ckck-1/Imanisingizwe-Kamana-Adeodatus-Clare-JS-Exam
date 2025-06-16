//JS EXAM TERM 3 QN(21)
//-------------------------

const express= require('express');

const app= express();
const students=[];

//b)==============
app.use(express.json()); 
//=================================



//a)=======================================================================
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name} , Grade:${this.grade}`;
  }
}
//============================================================================

//c)=================================================================================
app.post('/students',(req,res)=>{
    const {name,grade}= req.body; 
    const student1 = new Student(name, grade);
    students.push(student1)
    res.status(201).json({
        message: 'Student1 created and added to the array',
        data: student1
    })
});

app.get('/students',(req,res)=>{
    res.json(students)
});

app.listen(3000,()=>{
    console.log("server running on Port: 3000")
});
//===============================================================================
