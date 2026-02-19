const students = [
{ name: "Ali", surname: "Baqytzhanuly", age: "15", course: 1},
{ name: "Dana", surname: "Koishibekovna", age: "16", course: 2},
{ name: "Aruzhan", surname: "Galymzhanovna",  age: "16", course: 1},
{ name: "Nursultan",surname: "Abishevitch",  age: "18", course: 3},
{ name: "Madi", surname: "Aibekuly",  age: "17",course: 2},
{ name: "Aigerim", surname: "Sultankyzy",  age: "15", course: 1},
{ name: "Zan", surname: "Adiletov", age: "16", course: 1},
{ name: "Asyl", surname: "Askaruly", age: "16", course: 3},
{ name: "Zeynep", surname: "Kairatovna" , age: "16", course: 2},
{ name: "Malik", surname: "Aybarkuly", age: "16", course: 2},
{ name: "Gulim", surname: "Maksatkizy", age: "17", course: 3},
{ name: "Yakub", surname: "Mehmet", age: "15", course: 1},
{ name: "Balym", surname: "Rakhimbekkizy", age: "16", course: 2},
{ name: "Nurbergen", surname: "Ibrahimovich", age: "15", course: 1 },
{ name: "Tanya", surname: "Sergeevna",  age: "15",course: 1},
{ name: "Linara", surname:"Linoleum", age: "16", course: 2},
{name: "Pikon", surname:"Pikonbekov", age: "18", course: 3}
];

const list = document.querySelector("#list");
const searchInput = document.querySelector("#search");
const courseSelect = document.querySelector("#course");
const sortSelect = document.querySelector("#sort");
const resetBtn = document.querySelector("#reset");

function render(arr) {
    list.innerHTML = "";
arr.forEach(function(s) {
list.innerHTML += `
        <li>
        <strong>${s.name}</strong>
        <strong>${s.surname}</strong>
        <strong>${s.age}</strong>
        <span class="badge">Course: ${s.course}</span>
        </li>
        `;
    });
}
function applyAll() {
    const text = searchInput.value.toLowerCase().trim();
    const courseValue = courseSelect.value;
    const sortValue = sortSelect.value;
    let result = students;
    if (text !== "") {
        result = result.filter(function(s) {
            return s.name.toLowerCase().includes (text) + s.surname.toLowerCase().includes (text) + s.age.toLowerCase().includes (text);;

    });
}

if (courseValue !== "all") {
    result = result.filter(function(s) {
        return s.course === Number(courseValue);
    });
}

if (sortValue === "az") {
result = [...result].sort(function(a, b) {
    return a.name.localeCompare(b.name);
    });
}

if (sortValue === "za") {
    result = [...result].sort(function(a, b) {
        return b.name.localeCompare(a.name);
    });
}
render (result);
}

render(students);

searchInput.addEventListener("input", applyAll);
courseSelect.addEventListener("change", applyAll);
sortSelect.addEventListener("change", applyAll);

resetBtn.addEventListener("click", function() {
    searchInput.value = "";
    courseSelect.value = "all";
    sortSelect.value = "none";
    render(students);
});