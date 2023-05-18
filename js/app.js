const countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    // Add more countries here
];

const countrySelect = document.getElementById('country');

countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = country.name;

    const flagSpan = document.createElement('span');
    flagSpan.classList.add('fi', `fi-${country.code.toLowerCase()}`);

    option.prepend(flagSpan);
    countrySelect.appendChild(option);
    
});


const form = document.querySelector('form');
const requiredFields = document.querySelectorAll('[required]');

form.addEventListener('submit', validateForm);
function validateForm(e) {
    e.preventDefault();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const incompleteFields = Array.from(requiredFields).filter(field => !field.value);

    if (password !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        confirmPasswordError.textContent = "Passwords don't match"
        confirmPasswordInput.classList.add('border-red-500')
    }

    if (incompleteFields.length > 0) {
        const errorMessage = 'You need to complete all required fields *';
        displayErrorMessage(errorMessage);
    } else {
        // If all required fields are filled, submit the form
        form.submit();
    }
}
function displayErrorMessage(message) {
    const errorSpan = document.getElementById('errorSpan');
    errorSpan.textContent = message;
}

//////

const zipInput = document.getElementById('zip');
const zipError = document.getElementById('zipError');
let isZipInputBlurred = false;

function validateZipCode() {
    const zipCodePattern = /^\d{5}$/;
    const zipCode = zipInput.value.trim();

    if (zipCodePattern.test(zipCode)) {
        zipError.textContent = ''; // Clear the error message
        zipInput.classList.remove('border-red-500');
    } else {
        zipError.textContent = 'Please enter a valid ZIP code';
        zipInput.classList.add('border-red-500');
    }
}

zipInput.addEventListener('blur', () => {
    isZipInputBlurred = true;
    validateZipCode();
});

zipInput.addEventListener('input', () => {
    if (isZipInputBlurred) {
        validateZipCode();
    }
});
/////////

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

let isEmailInputBlurred = false;

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isEmailInputBlurred) {
        return; // Skip validation when input is not blurred yet
    }

    if (emailPattern.test(email)) {
        emailInput.classList.remove('border-red-500');
        emailError.textContent = ''; // Clear the error message
    } else {
        emailInput.classList.add('border-red-500');
        emailError.textContent = 'Please enter a valid email address';
    }
}

emailInput.addEventListener('blur', () => {
    isEmailInputBlurred = true;
    validateEmail();
});

emailInput.addEventListener('input', () => {
    if (isEmailInputBlurred) {
        validateEmail();
    }
});
/////////
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
let isPasswordInputBlurred = false;

passwordInput.addEventListener('blur', () => {
    isPasswordInputBlurred = true;
    validatePassword();
});

passwordInput.addEventListener('input', () => {
    if (isPasswordInputBlurred) {
        validatePassword();
    }
});

confirmPasswordInput.addEventListener('blur', () => {
    isPasswordInputBlurred = true;
    validatePassword();
});

confirmPasswordInput.addEventListener('input', () => {
    if (isPasswordInputBlurred) {
        validatePassword();
    }
});

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 6) {
        passwordError.textContent = 'Password should be at least 6 characters long'
        passwordInput.classList.add('border-red-500');
    } else if (!/\d/.test(password)) {
        passwordError.textContent = 'Password should contain at least one number'
        passwordInput.classList.add('border-red-500');
    } else {
        passwordError.textContent = ''
        passwordInput.classList.remove('border-red-500');
    }

    if (password === confirmPassword) {
        confirmPasswordError.textContent = ""
        confirmPasswordInput.classList.remove('border-red-500');
    }
}