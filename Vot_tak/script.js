const input = document.getElementById("inputText");
const btn = document.getElementById("btn");
const name1 = document.getElementById("name");
const username = document.getElementById("username");

btn.addEventListener("click", () => 
{
    name1.innerText = input.value;
    username.innerText = "@" + input.value;
});

const theme = document.getElementById("theme");
const ctn = document.getElementById("ctn");

theme.addEventListener("click" , () => {
    ctn.classList.toggle("black")
})