let courses = [
    {
        id: 1,
        content: "Learn Javascript Session 01",
        dueDate: "2023-04-17",
        status: false,
        assignedTo: "Anh Bách",
    },
    {
        id: 2,
        content: "Learn Javascript Session 02",
        dueDate: "2023-04-17",
        status: false,
        assignedTo: "Lâm th",
    },
    {
        id: 3,
        content: "Learn CSS Session 01",
        dueDate: "2023-04-17",
        status: false,
        assignedTo: "Hiếu Ci ớt ớt",
    },
];

function displayCourses(courses) {
    let tbody = document.querySelector("#body");
    tbody.innerHTML = "";

    courses.forEach((c, index) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <th scope="row">${c.id}</th>
            <td>${c.content}</td>
            <td>${c.dueDate}</td>
            <td>${c.status ? "Resolved" : "Pending"}</td>
            <td>${c.assignedTo}</td>
            <td><button type="button" class="btn btn-warning btn-sm" onclick="editCourse(${index})">Sửa</button></td>
            <td><button type="button" class="btn btn-danger btn-sm" onclick="deleteCourse(${index})">Xóa</button></td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById("btn").addEventListener("click", () => {
    let content = document.getElementById("content").value.trim();
    let dueDate = document.getElementById("date").value;
    let assignedTo = document.getElementById("name").value.trim();
    let statusSelect = document.querySelector(".form-select");
    let status = statusSelect.value === "resolved" ? true : false;

    if (
        !content ||
        !dueDate ||
        !assignedTo ||
        statusSelect.value === "Choose Status"
    ) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let courses = JSON.parse(localStorage.getItem("courses")) || [];

    let newCourse = {
        id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1,
        content,
        dueDate,
        status,
        assignedTo,
    };

    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses(courses);

    document.getElementById("content").value = "";
    document.getElementById("date").value = "";
    document.getElementById("name").value = "";
    statusSelect.selectedIndex = 0;
});

function deleteCourse(index) {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.splice(index, 1);
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses(courses);
}

function editCourse(index) {
    let courses = JSON.parse(localStorage.getItem("courses")) || [];
    let course = courses[index];

    let newContent = prompt("Nhập nội dung mới:", course.content);
    let newDueDate = prompt("Nhập ngày mới (YYYY-MM-DD):", course.dueDate);
    let newStatus = confirm("Đã hoàn thành chưa?");
    let newAssigned = prompt("Người phụ trách mới:", course.assignedTo);

    course.content = newContent;
    course.dueDate = newDueDate;
    course.status = newStatus;
    course.assignedTo = newAssigned;

    courses[index] = course;
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses(courses);
}

let savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
displayCourses(savedCourses);
