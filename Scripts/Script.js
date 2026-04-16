document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        statusMessage.textContent = "Sending message...";

        emailjs.sendForm(
            "service_kbateo1",
            "template_43lzdne",
            form
        )
        .then(() => {
            statusMessage.textContent = "Message sent successfully!";
            statusMessage.style.color = "green";
            form.reset();
        })
        .catch((error) => {
            statusMessage.textContent = "Failed to send message. Try again.";
            statusMessage.style.color = "red";
            console.log(error);
        });
    });

});