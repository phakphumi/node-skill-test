var request = require('request');
var express = require('express');
var app = express();
var PORT = 3000;

function getGithubFollowers (username) {
    return new Promise (function (resolve, reject){
        request({
            url: 'https://api.github.com/users/'+username+'/followers', 
            json: true,
            headers: {
                'User-Agent':'phakphumi'
            }
        }, function (error, reponse, body) {
            if (error) {
                reject('Unable to fetch github followers.');
            } else {
                resolve(JSON.stringify(body, null, 4));
            }
        });
    })
}

var middleware = require('./middleware.js');

app.use(middleware.logger);
app.use(express.static( __dirname + '/public'));

app.get('/request', function(req, res) {
    // res.send('About us');
    getGithubFollowers(req.query.username).then(function (data) {
        res.send(data);
    }, function (error) {
        console.log(error);
    });
    // setTimeout(function () {
    //     response = JSON.stringify(response, null, 4);
    //     console.log(response);
    //     res.send(response);
    // },10000);
});

app.listen(PORT, function () {
    console.log('Express Server started on port ' + PORT +'!');
});