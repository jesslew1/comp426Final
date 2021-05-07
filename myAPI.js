var unirest = require("unirest");

var req = unirest("GET", "https://mailcheck.p.rapidapi.com/");

req.query({
	"domain": "mailinator.com"
});

req.headers({
	"x-rapidapi-key": "3a22edae84msh71af35d41f4631fp105b23jsne934b58e39aa",
	"x-rapidapi-host": "mailcheck.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});