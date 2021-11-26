const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/despensafrontend-team10'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/despensafrontend-team10/index.html'));
});

app.listen(process.env.PORT || 8080);