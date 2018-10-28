var cryptor = require('./libs/cryptor.js');
var fs=require("fs");

let mykey={};
var data = fs.readFileSync(__dirname+"/data/pk","utf8");
mykey["publicKey"]=data;

var data = fs.readFileSync(__dirname+"/data/sk","utf8");
mykey["privateKey"]=data;

var origianl='123456';
console.log("origianl: "+origianl);

var md5=cryptor.md5crypt(origianl);
console.log("md5: " + md5);

var shae=cryptor.encrypt(md5, mykey["publicKey"]);
console.log("SHA encrypt: "+shae);

console.log(mykey["privateKey"]);
var shade=cryptor.decrypt(shae, mykey["privateKey"]);
console.log("SHA decrypt: "+shade);

//var moment=require('moment');
//console.log(moment().format('YYYY-MM-DD HH:mm:ss'));