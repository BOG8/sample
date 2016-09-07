let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

// let emails = {};

var emails = [];
var visits = [];

app.post('/users', (req, res, body) => {
    let email = req.body.email;
    var flag = 0;

    for (var i = 0; i < email.length; i++) {
        if (emails[i] == email) {
	    visits[i] = visits[i] + 1;
	    res.send({ count : visits[i] })
	    console.log( { count : visits[i] })
	    flag = 1;
	}  
    }

    if (flag == 0) {
        emails.push(email);
	visits.push(0);
	res.send({ count : 0 })
	console.log( { count : 0 })
    }  
});

/*app.post('/users', (req, res, body) => {
    // console.log(req.body);
    // res.send('100');
    // TODO: вернуть количество обращений
    let email = req.body.email;
    console.log(email);
    if (email in emails) {
        emails[email]++;
        res.send(  { count : emails[email] })
        console.log( { count : emails[email] })
    }
    else {
        emails[email] = 0;
        res.send({ count : emails[email] });
        console.log( { count : emails[email] })
    }
});*/

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
