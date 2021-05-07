const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;
    authentication.signInWithEmailAndPassword(email, password).then(cred => {
        Cookies.set("Email", email);
        loginform.reset();
        window.location.href = "day1.html";
    });
});