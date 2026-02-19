let count1 = 0;
let count2 = 0;
let count3 = 0;

// Исправлены имена переменных (l вместо 1, убраны лишние l)
const countEl1 = document.getElementById("count1");
const countEl2 = document.getElementById("count2");
const countEl3 = document.getElementById("count3");
const totalEl = document.getElementById("total");
const submitBtn = document.getElementById("submit");

// Исправлено bdocument -> document
const form = document.getElementById("form");

function updateTotal() {
    const total = count1 + count2 + count3;
    totalEl.textContent = total;
    submitBtn.disabled = total === 0;
}

/* Counter 1 */
document.querySelector(".plus1").addEventListener("click", () => {
    count1++;
    countEl1.textContent = count1; // Исправлено имя переменной
    updateTotal();
});
document.querySelector(".minus1").addEventListener("click", () => {
    if (count1 > 0) {
        count1--;
        countEl1.textContent = count1; // Исправлено имя переменной
        updateTotal();
    }
});

/* Counter 2 */
document.querySelector(".plus2").addEventListener("click", () => {
    count2++;
    countEl2.textContent = count2;
    updateTotal();
});

document.querySelector(".minus2").addEventListener("click", () => {
    if (count2 > 0) {
        count2--;
        countEl2.textContent = count2;
        updateTotal();
    }
});

/* Counter 3 */
document.querySelector(".plus3").addEventListener("click", () => {
    count3++;
    countEl3.textContent = count3;
    updateTotal();
});
document.querySelector(".minus3").addEventListener("click", () => {
    if (count3 > 0) {
        count3--;
        countEl3.textContent = count3; // Исправлено countE13 -> countEl3
        updateTotal();
    }
});

/* Submit */
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted!");
});