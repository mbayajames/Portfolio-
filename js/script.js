var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

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




