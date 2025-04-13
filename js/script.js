function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


// home-content
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// DARK MODE 
var icon = document.getElementById("icon");

            if (localStorage.getItem("theme") === "dark") {
                document.body.classList.add("dark-theme");
                icon.src = "images/sun.png";
            } else {
                document.body.classList.remove("dark-theme");
                icon.src = "images/moon.png";
            }

                icon.onclick = function () {
                document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                icon.src = "images/sun.png";
                localStorage.setItem("theme", "dark");
            } else {
                 icon.src = "images/moon.png";
                 localStorage.setItem("theme", "light");
              }
            };



            
            