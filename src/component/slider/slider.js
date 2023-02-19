import "./style.css"
const header = document.getElementsByTagName("header")[0]
const div = document.createElement("div");
div.classList.add("slider")
header.after(div);