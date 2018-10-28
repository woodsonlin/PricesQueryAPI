var express = require('express');
var app = express();
var sql = require('mssql');
var moment=require('moment');

var config = {
    user: 'sa',
    password: 'Gao_1511',
    server: 'localhost',
    database: 'samples',
    options: {
        encrypt: true
    }
};

app.get("/", (req,res) => {
    res.json({status: "com.timedevelop.samples.api"});
});

app.get('/prices/:sampelid',function (req, res){
    sql.connect(config).then(function () {
        //query
        var sampelid=req.params.sampelid;
        
        var today=moment().format('YYYY-MM-DD');
        console.log(today);
        
        new sql.Request()
        .input('input_parameter1',sql.VarChar,sampelid)
        .input('input_parameter2',sql.VarChar,today)
        .query("select  ArtID,Customer,PeriodOfValidity,MOQ,CodeRange,LowSeasonPrice,HighSeasonPrice,RemarK from [samples].[ProductsPrice] where ArtID=@input_parameter1 and PeriodOfValidity>@input_parameter2 ")
        .then(function (result) {
            let rows=result.recordset;
            console.log(sampelid);
            console.dir(rows);
            res.status(200).json(rows);
            sql.close();
        })
        .catch(function (err){
            console.log(err);
            res.status(500).send({message:err});
            sql.close();
        });
    });
});

app.listen(8888, function () {
    console.log('app listening on 8888');
})