function myFunction() {
    var x = document.getElementById("menu");
    var icon = document.getElementById("icon");
    icon.classList.toggle("fa-window-close");
    if (x.className === "topnav") {
        document.body.style.overflow = "hidden";
        x.className = x.className + " responsive";

    } else {
        x.className = "topnav";
        document.body.style.overflow = "auto"
    }
}