authentication.onAuthStateChanged(user => {
    console.log(user);
})
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupform['email_value'].value;
    const password = signupform['password_value'].value;
    var name = signupform['name_value'].value;
    Cookies.set('Email', email);
    authentication.createUserWithEmailAndPassword(email, password).then(cred => {
        savedata(name, email, 1);
        window.location.href = "intro.html";
   });
});
function getformvalue(id) {
    return document.getElementById(id).value;
}
function savedata(name, email, UID) {
    database.ref('/users' ).push({
      name: name,
        email: email,
        day1: false,
        day2: false,
        day3: false,
        day4: false,
        befriend_jonna: false,
        befriend_mia: false,
        befriend_grady: false,
        befriend_brittney: false,
        befriend_ellie: false,
        befriend_oliver: false,
        befriend_riley: false,
    });

}
