const username = document.getElementById("name");
const input1 = document.getElementById("inputName");
const profile = document.getElementById("profile");
const input2 = document.getElementById("inputImg");

function setName(){
    username.textContent = input1.value + ", Spotted";
}
function setImg(){
    profile.style.backgroundImage = "url(" + input2.value + ")";
}
