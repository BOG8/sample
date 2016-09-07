let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

var emails = [];
var visits = [];

app.post('/users', (req, res, body) => {
    let email = req.body.email;
    var index = emails.indexOf(email);

    if (index != -1) {
        visits[index] = visits[index] + 1;
	res.send({ count : visits[index] })
        console.log( { email : email, count : visits[index] })
    }
    else {
        emails.push(email);
	visits.push(0);
	res.send({ count : 0 })
	console.log( { email : email, count : 0 })
    }
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
