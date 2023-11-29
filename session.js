'use strict';

const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded;
const staticServer = express.static;
const session = require('express-session')

app.use(urlencoded({ extended: true }));
app.use('/', staticServer('./static/'));
app.use(session({secret: 'secret'}));


const users = {
    'user1': 'password1',
    'user2': 'password2'
}

const data = {
    'user1': 'This is the data for user\n\nName: Nguyen Van User1\nAge: 18\nAddress: 123 Xo Viet Nghe Tinh',
    'user2': 'This is the data for user2\n\nName: Tran Thi User2\nAge: 25\nAddress: 54 Nguyen Luong Bang',
}

app.post('/session', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (users[username] === password) {
        req.session.loggedIn = true;
        res.writeHead(302, {
            'Location': `data?username=${username}`
        });
        res.end();
    } else {
        res.status(401).end('wrong username or password');
    }
});

app.get('/data', function(req, res) {
    if (!req.session || !req.session.loggedIn) {
        res.status(403).end('not logged in');
    } else {
        const username = req.query.username;
        res.end(data[username]);
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));