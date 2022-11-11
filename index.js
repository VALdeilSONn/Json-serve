var express = require('express');
var index = express ();

index.get('/',function(req, res){
    res.send('ola, mundo');
});

index.listen(3000, function(){
    conseole.log('Executando na porta 3000!');
});