const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password2");

function showInputError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-input error animate__animated animate__headShake';
    const small = formControl.querySelector('small');
    small.innerText = message;
    setTimeout(function () {
        formControl.className = 'form-input error';
    }, 500);
}

function showInputSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-input success animate__animated animate__bounceIn';
}

function checkEmailValidity(input) {
    const re = /^(([^<>()\[\]\\.,;:\$@""]+(\.[^<>()\[\]\\.,;:\$@""]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showInputSuccess(input);
    } else {
        showInputError(input, 'Email is not valid');
    }
}

function checkRequiredFileds(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showInputError(input, `${getFieldName(input)}` + 'is required')
        } else {
            showInputSuccess(input);
        }
    });
}

function checkInputLength(input, min, max) {
    if (input.value.length < min) {
        showInputError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showInputError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showInputSuccess(input);
    }
}

function checkUsername(input) {
    const usr = /^[0-9a-zA-Z]+$/;
    if (!usr.test(input.value)) {
        showInputError(input, 'Username can only contain letters or numbers');
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showInputError(input2, 'Password does not math');
    }
}

function getFielName(input) {
    return input.id.charAt(0).toUppercase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequiredFileds([usernameInput, emailInput, passwordInput, confirmPasswordInput]);
    checkInputLength(usernameInput, 3, 15);
    checkInputLength(passwordInput, 6, 25);
    checkInputLength(confirmPasswordInput, 6, 25);
    checkEmailValidity(emailInput);
    checkPasswordMatch(passwordInput, confirmPasswordInput);
    checkUsername(usernameInput);
});
