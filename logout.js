const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    Cookies.remove("Email");
    authentication.signOut().then(() => {
        window.location.href = "index.html"
    });
});