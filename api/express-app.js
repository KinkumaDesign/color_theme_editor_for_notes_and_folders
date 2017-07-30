const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs');

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/text-export', function(req, res){
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    var textRaw = req.body.text
    var text = decodeURI(textRaw)
    var fileRaw = req.body.file
    var fileName = decodeURI(fileRaw)

    fs.writeFile('./htdocs/jsons/' + fileName, text, function(writeErr){
        if(writeErr){
            console.error(writeErr)
            res.status(500).end('file can not save')
            return
        }
        res.send('complete')
    });
})

app.listen(8097, function () {
    console.log('Text Export app listening on port 8097!')
})