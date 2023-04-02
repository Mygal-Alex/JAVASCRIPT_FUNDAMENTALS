(() => {
    document.querySelector(".btn").onclick = () => {
        myWindow = window.open("", "", "width=300, height=300");
        window.setTimeout('myWindow.resizeTo(500, 500);',2000);
        window.setTimeout('myWindow.moveTo(200, 200);',4000);
        window.setTimeout('myWindow.close();',6000 );
    }
})()