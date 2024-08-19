document.addEventListener("DOMContentLoaded", function () {
    const formAlerts = document.querySelectorAll(".form-alert");
    const userInput = document.querySelectorAll(".user-input");
    const emailInput = document.querySelector("#email");
    const radioButtons = [document.querySelector(".radio1"), document.querySelector(".radio2")];
    const messageInput = document.querySelector("#message");
    const btn = document.querySelector(".btn-submit");
    const checkBox = document.querySelector("#consent");
    const massageSuccess = document.querySelector(".massage-success");

    const usrRegex = /^[0-9A-Za-z]{6,16}$/i;
    const emailRegex = /^[0-9A-Za-z._-]+@[0-9A-Za-z.-]+\.[a-zA-Z]{2,}$/;

    function validateInput(input, regex, alertElement) {
        const isValid = regex.test(input.value);
        alertElement.style.display = isValid ? "none" : "block";
        alertElement.classList.toggle("active", !isValid);
        return isValid;
    }

    function validateRadio(radioButtons, alertElement) {
        const isChecked = radioButtons.some(radio => radio.checked);
        alertElement.style.display = isChecked ? "none" : "block";
        alertElement.classList.toggle("active", !isChecked);
        return isChecked;
    }

    function validateMessageLength(input, minLength, alertElement) {
        const isValid = input.value.length >= minLength;
        alertElement.style.display = isValid ? "none" : "block";
        alertElement.classList.toggle("active", !isValid);
        return isValid;
    }

    function validateCheckBox(checkBox, alertElement) {
        const isChecked = checkBox.checked;
        alertElement.style.display = isChecked ? "none" : "block";
        alertElement.classList.toggle("active", !isChecked);
        return isChecked;
    }

    btn.addEventListener("click", function (event) {
        const validations = [
            validateInput(userInput[0], usrRegex, formAlerts[0]),
            validateInput(userInput[1], usrRegex, formAlerts[1]),
            validateInput(emailInput, emailRegex, formAlerts[2]),
            validateRadio(radioButtons, formAlerts[3]),
            validateMessageLength(messageInput, 20, formAlerts[4]),
            validateCheckBox(checkBox, formAlerts[5])
        ];

        const isFormValid = validations.every(isValid => isValid);

        if (!isFormValid) {
            event.preventDefault();  
        } else {
            massageSuccess.style.display = "block";  
            event.preventDefault();
        }
    });
});
