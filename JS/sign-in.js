// Login Page Variables
const loginForm = document.querySelector(".login-form");

const createAccountForm = document.querySelector("#createAccount");
const createEmailInput = document.querySelector("#createEmailAddress");
const createUsernameInput = document.querySelector("#createUsername");
const createPasswordInput = document.querySelector("#createPassword");
const confirmPasswordInput = document.querySelector("#confirmPassword");

const signInSubmitButton = document.querySelector(".signin-button");
const signUpSubmitButton = document.querySelector(".signup-button");

const usernameInput = document.querySelector(".user-input");
const userPasswordInput = document.querySelector(".password-input");
const usernameErrorMessage = document.querySelector(".username-error-message").style.display = "none";
const passwordErrorMessage = document.querySelector(".password-error-message").style.display = "none";

const enterUsernameInput = document.querySelector("#enterUsername");
const enterPasswordInput = document.querySelector("#enterPassword");

// Local Storage //
function render() {
    localStorage.setItem('userName', JSON.stringify(userName));
}

// Error message for Login Page //
usernameInput.addEventListener('click', () => {
    usernameInput.addEventListener('blur', () => {
        if (usernameInput.value == "") {
            document.querySelector(".username-error-message").style.display = "block";
        };
    });
});

userPasswordInput.addEventListener('click', () => {
    userPasswordInput.addEventListener('blur', () => {
        if (userPasswordInput.value == "") {
            document.querySelector(".password-error-message").style.display = "block";
        };
    });
});

// Button that will submit the data given by the User //
loginForm.addEventListener('submit', e => {
    if (usernameInput.value == "" || userPasswordInput.value == "") {
        e.preventDefault();
        alert("Please fill in your details");
        return;
    }

    function passUserName() {
        const name = usernameInput.value;
        localStorage.setItem('userName', name);
    }

    passUserName();
    render();

});

// Sign in/up Page Functions //
function createAccountPage() {
    loginForm.style.display = "none";
    createAccountForm.style.display = "contents";
};

function signInPage() {
    loginForm.style.display = "contents";
    createAccountForm.style.display = "none";
};

