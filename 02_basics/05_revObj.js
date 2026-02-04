const student = {
    name : "Ram",
    age : 20 , 
    branch : "cse",
    language : [ {
        lang1 : "java",
        lang2 : "python"
    }], 
}
// console.log(student["language"][0].lang1) // undefined
// console.log(student.language)

student.college = "abes engineering college"
console.log(student)
delete student.name ;
console.log(student)