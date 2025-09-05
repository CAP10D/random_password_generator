let overlay = document.querySelector('.overlay');
let input = document.getElementById('password');
let generate = document.getElementById('submit');
let copy = document.getElementById('copy');

let password_length = 9;

generate.addEventListener('click', (e) => {
    e.preventDefault()
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for (let i = 0; i <= password_length; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    input.value = password;

    // Enable copy button after generating a password
});

copy.addEventListener('click', () => {
    if (input.value !== "") {
        navigator.clipboard.writeText(input.value);
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2000);
    }
});
