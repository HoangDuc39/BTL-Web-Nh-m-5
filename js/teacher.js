// Đọc lại Dữ liệu từ localStorage đã được LƯU
const data_all = JSON.parse(window.localStorage.getItem('data_all'));
// Phân tích tham số URL để biết thông tin Mã giáo viên cần lấy
const queryString = window.location.search;

// console.log(queryString);
// ?id=n
const urlParams = new URLSearchParams(queryString);
const teacherID = urlParams.get('id')


let teacher = data_all.teachers[teacherID - 1];

console.log(teacher);

// Đọc dữ liệu ra DOM
let personal_text = document.querySelector(".personal_text");

// console.log(personal_text.children)
let avatar = document.querySelector(".imm");
avatar.src = teacher.avatar;
about-info.children[3].children[0].textContent = teacher.age;
about-info.children[4].children[0].textContent = teacher.email;
about-info.children[5].children[0].textContent = teacher.phone;
about-info.children[6].children[0].textContent = teacher.address;