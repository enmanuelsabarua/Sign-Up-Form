const btn = document.querySelector('#submit-btn');

btn.addEventListener('click', e => {
    // e.preventDefault();

    const firstPassword = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const passwordDiv = document.querySelector('.first-password');

    if(firstPassword.value !== confirmPassword.value) {
        e.preventDefault();

        passwordDiv.classList.add('error');

        firstPassword.value = '';
        confirmPassword.value = '';

        console.log(firstPassword);
    } else {
        passwordDiv.classList.remove('error');
    }
});