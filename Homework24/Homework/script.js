const navigationMenu = document.getElementById("navigationMenu");
const contentSections = document.querySelectorAll("section");

navigationMenu.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    navigationMenu.querySelectorAll("button").forEach(navButton => navButton.classList.remove("active-nav"));
    event.target.classList.add("active-nav");

    const selectedSection = event.target.dataset.section;
    contentSections.forEach(section => {
      section.classList.remove("active");
      if (section.id === selectedSection) section.classList.add("active");
    });
  }
});

const taskInputForm = document.getElementById("taskInputForm");
const taskInputField = document.getElementById("taskInputField");
const taskList = document.getElementById("taskList");

taskInputForm.addEventListener("submit", function(event) {
  event.preventDefault();
  if (taskInputField.value.trim() === "") return;

  const taskItem = document.createElement("li");
  taskItem.textContent = taskInputField.value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "✕";
  deleteButton.classList.add("delete-btn");

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInputField.value = "";
});

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed-task");
  }
});

const starRating = document.getElementById("starRating");
const ratingOutput = document.getElementById("ratingOutput");

starRating.addEventListener("click", function(event) {
  if (event.target.tagName !== "SPAN") return;

  const userRating = event.target.dataset.rate;
  starRating.querySelectorAll("span").forEach(starElement => {
    starElement.classList.remove("star-active");
    if (starElement.dataset.rate <= userRating) starElement.classList.add("star-active");
  });

  ratingOutput.textContent = "Ваша оценка: " + userRating;
});

const productContainer = document.getElementById("productContainer");
const shoppingCart = document.getElementById("shoppingCart");

productContainer.addEventListener("click", function(event) {
  if (event.target.tagName !== "BUTTON") return;
  const productName = event.target.dataset.name;

  const cartItem = document.createElement("li");
  cartItem.textContent = productName;

  shoppingCart.appendChild(cartItem);
});

const languageSwitcher = document.getElementById("languageSwitcher");
const pageHeading = document.getElementById("pageHeading");
const pageDescription = document.getElementById("pageDescription");

languageSwitcher.addEventListener("click", function(event) {
  if (event.target.tagName !== "BUTTON") return;
  const selectedLanguage = event.target.dataset.lang;

  if (selectedLanguage === "en") {
    pageHeading.textContent = "Welcome";
    pageDescription.textContent = "This is Dias's laptop ";
  }
  if (selectedLanguage === "ru") {
    pageHeading.textContent = "Добро пожаловать";
    pageDescription.textContent = "Это ноутбук Диаса";
  }
  if (selectedLanguage === "kz") {
    pageHeading.textContent = "Қош келдіңіз";
    pageDescription.textContent = "Бұл Диастың Ноутбугы";
  }
});
