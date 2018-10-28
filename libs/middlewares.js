var bodyParser=require('body-parser');
var fs=require("fs");

module.exports = app =>{
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.set("port", 8888);
    app.set("json spaces", 4);
    fs.readFile(__dirname+"/../data/pk","utf8",function(err,data) {
        app.set("publicKey",data);
    });
        
    fs.readFile(__dirname+"/../data/sk","utf8",function(err,data) {
        app.set("privateKey",data);
    });
}