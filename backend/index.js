const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sidebarData = require('./sidebarData').videoList;
const mainVideoData = require('./mainVideoData').mainvideoinfo;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/videos', (req, res) => {
    res.json(sidebarData);
})

app.get('/videos/:id', (req, res) => {
    console.log(req.params.id);
    let videoId = mainVideoData.find(info => {
        if (info.id === parseInt(req.params.id, 10)) {
            res.json(info);
        }
    })
});

app.post('/videos/:id/comments', (req, res) => {
    const targetVid = mainVideoData.find(info2 => info2.id === parseInt(req.params.id, 10));
    targetVid.comments.push(req.body);
    res.json(targetVid);
})

app.listen(8080, () => {
    console.log('the server is running');
})