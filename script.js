document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#newsletter-form");
const emailInput = document.querySelector("#email");
const message = document.querySelector("#newsletter-message");

if (!form || !emailInput || !message) return;

form.addEventListener("submit", (event) => {
event.preventDefault();

if (!emailInput.checkValidity()) {
emailInput.reportValidity();
message.textContent = "Please enter a valid email address.";
message.classList.remove("is-success");
message.classList.add("is-error");
return;
}

       
message.textContent = "What, did you think this would work?.";
message.classList.remove("is-error");
message.classList.add("is-success");
form.reset();
});
});