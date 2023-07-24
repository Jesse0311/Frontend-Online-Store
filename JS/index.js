document.querySelector('#username').innerHTML = localStorage.getItem('userName');


var logoutButton = document.querySelector("#logout-button");

if (localStorage.getItem('userName') === null) {
    document.querySelector('#sign-in-link').style.display = "contents";
    document.querySelector('#sign-up-link').style.display = "contents";
    document.querySelector('#logout-button').style.display = "none";
} else {
    document.querySelector('#sign-in-link').style.display = "none";
    document.querySelector('#sign-up-link').style.display = "None";
    document.querySelector('#logout-button').style.display = "contents";
};

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('userName');
});




// Size Checkbox for Product Page //
const sizeCheckbox = document.getElementsByClassName("size-checkbox");

// Size Checkbox //
$('.size-checkbox').on('change', function () {
    $('.size-checkbox').not(this).prop('checked', false);
});





