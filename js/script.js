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



            
            document.getElementById("contact-form").addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent form from submitting
        
                let isValid = true;
        
                document.querySelectorAll(".field").forEach(field => {
                    const input = field.querySelector(".item");
                    const errorTxt = field.querySelector(".error-txt");
        
                    if (input.value.trim() === "") {
                        errorTxt.style.display = "block";
                        input.classList.add("error-border");
                        isValid = false;
                    } else {
                        errorTxt.style.display = "none";
                        input.classList.remove("error-border");
                    }
                });
        
                // Email Validation
                const email = document.getElementById("email");
                const emailError = email.nextElementSibling;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value.trim())) {
                    emailError.style.display = "block";
                    email.classList.add("error-border");
                    isValid = false;
                } else {
                    emailError.style.display = "none";
                    email.classList.remove("error-border");
                }
        
                // Phone Validation
                const phone = document.getElementById("phone");
                const phoneError = phone.nextElementSibling;
                const phonePattern = /^[0-9]{10,15}$/;
                if (!phonePattern.test(phone.value.trim())) {
                    phoneError.style.display = "block";
                    phone.classList.add("error-border");
                    isValid = false;
                } else {
                    phoneError.style.display = "none";
                    phone.classList.remove("error-border");
                }
        
                if (isValid) {
                    document.querySelector(".success-message").style.display = "block";
        
                    setTimeout(() => {
                        document.querySelector(".success-message").style.display = "none";
                        document.getElementById("contact-form").reset();
                    }, 3000);
                }
            });
        



