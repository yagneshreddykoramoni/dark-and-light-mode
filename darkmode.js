function dark(){
    var h1 = document.getElementById("h1");
    if(h1.textContent == "Light Mode"){
        h1.textContent = "Dark Mode";
    }else{
        h1.textContent = "Light Mode";
    }
    var a = document.body;
    a.classList.toggle("light");
    var b = document.getElementById("dark");
    b.classList.toggle("dark2");
    var c = document.getElementById("circle");
    c.classList.toggle("circle2");

    var sunIcon = document.getElementById("sun");
    var moonIcon = document.getElementById("moon");
    if (sunIcon.style.display === "none") {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
}