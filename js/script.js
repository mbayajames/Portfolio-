// MENU
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}


// home-content
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// CONTACT

const form = document.querySelector('form');

function sendEmail(){
    sendEmail.send({
    Host : "firebase.google.com",
    Username : "portfolioproject7@gmail.com",
    Password : "9qMQs1sjCwTqYT37QL2NWk8wgv53",
}).then (
    message => alert(message)
);

}


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



            document.getElementById("contactForm").addEventListener("submit", function(event) {
                event.preventDefault();
                let isValid = true;
                const fields = document.querySelectorAll(".field");
                
                fields.forEach(field => {
                    const input = field.querySelector(".item");
                    const errorText = field.querySelector(".error-txt");
                    if (input.value.trim() === "") {
                        errorText.style.display = "block";
                        isValid = false;
                    } else {
                        errorText.style.display = "none";
                    }
                });
                
                if (isValid) {
                    alert("Form submitted successfully!");
                    document.getElementById("contactForm").reset();
                }
            });



