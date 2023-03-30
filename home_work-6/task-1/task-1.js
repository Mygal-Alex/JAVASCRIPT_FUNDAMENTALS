(() => {
    let list = document.getElementById("list");
    list.lastElementChild.textContent
    let out = `${list.firstElementChild.textContent}, ${list.lastElementChild.textContent}, ${list.childNodes[3].textContent}, ${list.childNodes[7].textContent }, ${list.childNodes[5].textContent}`
    alert(out)
})()