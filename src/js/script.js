const formBtn = document.querySelector('button[type="submit"]');
const emailInput = document.querySelector('input[type="email"]');
const errorMsg = document.querySelector('.error');

formBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    validateEmail();

    if (emailValid) {
        errorMsg.classList.remove('on');
        window.location.reload();
    }
    else {
        errorMsg.classList.add('on');
    }
});

function validateEmail() {
    const email = emailInput.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(email)) {
        emailValid = true;
    } else {
        emailValid = false;
    }
}