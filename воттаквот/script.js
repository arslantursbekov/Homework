const btn = document.getElementById("generateBtn");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const githubInput = document.getElementById("github");
const resultDiv = document.getElementById("resultMessage");
const uploadBox = document.getElementById("uploadBox");

btn.addEventListener("click", () => {
    
    let name = fullNameInput.value;
    let email = emailInput.value;
    let github = githubInput.value;

    if (name === "" || email === "") {
        resultDiv.textContent = "Error: Please fill in all fields.";
        resultDiv.style.color = "red";
        resultDiv.style.borderColor = "red";
        resultDiv.classList.remove("hidden");
    } else {
        let message = "Ticket Generated for: " + name + " (" + github + ")";
        
        resultDiv.textContent = message;
        resultDiv.style.color = "white";
        resultDiv.style.borderColor = "#f57463";
        
        resultDiv.classList.remove("hidden");
        
        console.log("Form submitted successfully for " + name);
    }
});

uploadBox.addEventListener("click", () => {
    uploadBox.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    uploadBox.style.borderColor = "#f57463";
    console.log("Upload area clicked");
});