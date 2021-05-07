var uid;
authentication.onAuthStateChanged(user => {
    if(user != null){
        uid = user.uid
    }
})

function updateachievements(achievementName){
    var currentUser = firebase.auth().currentUser;
    var fieldName = "day2"

    database.ref('users')
        .orderByChild("email")
        .equalTo(Cookies.get("Email"))
        .once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                child.ref.update({[achievementName]: true});
            }); 
        });
}
