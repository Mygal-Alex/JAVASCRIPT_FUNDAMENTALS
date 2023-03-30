(() => {
let h1 = document.body.firstElementChild
h1.style.backgroundColor = "green"
let myDiv = document.getElementById("myDiv");
let p_2 = myDiv.childNodes[3]
p_2.style.color = "red"
let p_3 = myDiv.childNodes[5]
p_3.style.textDecoration = "underline"
let p_4 = myDiv.lastElementChild
p_4.style.fontStyle = "italic"
let myList = document.getElementById("myList");
myList.style.listStyleType = "none"
myList.style.display = "flex"
let span = document.body.childNodes[7]
span.style.display = "none"
})()