// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById("submit-button").addEventListener("click", function (event) {
    event.preventDefault();

    var contactPage = document.getElementById("contact-page");
    var thankYouMessage = document.createElement("p");

    thankYouMessage.textContent = "Thank you for your message!";
    thankYouMessage.style.fontSize = "24px";
    thankYouMessage.className = "thank-you"; // Use className instead of classList.add

    while (contactPage.firstChild) {
        contactPage.removeChild(contactPage.firstChild);
    }

    contactPage.appendChild(thankYouMessage);
});
