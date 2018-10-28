var cryptor = require('../libs/cryptor.js');
var uuid = require('node-uuid');

module.exports = app => {
    //用户注册
    app.post("/users", function(req, res){
        if(req.body.name && req.body.password){
            var name=req.body.name;
            var password=req.body.password;
        }
        //密码解密
        var decryptPassword=cryptor.decrypt(password, app.get("privateKey")).toString();
        //插入数据库
        var userid=uuid.v4();
        //调用models里的users方法，操作数据库
        
        res.json({"password": decryptPassword});
    });
}