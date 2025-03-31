let  students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }
];

function filterStudents(students) {
    return students.filter(student => {
        let average = (student.scores.math + student.scores.english + student.scores.literature) / 3;
        return average >= 8;
    })
    .map((student, index) => {
        console.log(`Student ${index + 1}:`);
        console.log(`   Name: ${student.name}`);
        console.log(`   Average: ${((student.scores.math + student.scores.english + student.scores.literature) / 3).toFixed(2)}`);
    });
}

filterStudents(students);