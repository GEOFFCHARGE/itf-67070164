const username = document.getElementById("user");
const profile = document.getElementById("profile");
const newdiv = document.getElementsByClassName("Container")
let phonenumber = []
let text2 = []
let num = 0
function setName()
    {username.textContent = document.getElementById("name").value + ", Who are you?";}
function setImg()
    {profile.style.backgroundImage = "url("+document.getElementById("pic").value + ")";}
function add()
    {num += 1
     const name = document.getElementById("pname").value
     const phone = document.getElementById("phone").value
     const cell1 = document.createElement("td")
     const cell2 = document.createElement("td")
     const cell3 = document.createElement("td")
     cell1.textContent = num
     cell2.textContent = name
     cell3.textContent = phone
     const row = document.createElement("tr")
     text2.push(num, name, phone)
     phonenumber.push(text2)
     row.appendChild(cell1)
     row.appendChild(cell2)
     row.appendChild(cell3)
     document.getElementById("table").appendChild(row)
     text1 = []
     console.log(phonenumber)}
function saveCSV() {
    const csvContent = phonenumber.map(row=>row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
