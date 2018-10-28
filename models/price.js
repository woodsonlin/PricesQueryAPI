var sql = require('mssql');
var db1config = require('../libs/db1config.js');
var moment=require('moment');

module.exports = app =>{
    return {
        query: (params,callback) =>{
            //sql.connect(config).then(function () {
            new sql.ConnectionPool(db1config).connect().then(pool =>{
                var sampleid=params.sampelID;
                //console.log("sampleid: %s",sampleid);
                var userName=params.username;
                //console.log("userName: %s", userName);
                var customerID=params.customerid;
                //console.log("customerID: %s",customerID);
                var today=moment().format('YYYY-MM-DD');
                //console.log("today: %s",today);
                
                let result={};

                //new sql.Request()
                pool.request()
                .input('input_parameter1',sql.VarChar,sampleid)
                .input('input_parameter2',sql.VarChar,today)
                .query("select  ArtID,Customer,PeriodOfValidity,MOQ,CodeRange,LowSeasonPrice,HighSeasonPrice,RemarK from [dbo].[Price] where ArtID=@input_parameter1 and PeriodOfValidity>@input_parameter2")
                .then(function (result) {
                    let rows=result.recordset;
                    result={"errorCode":"0","errorMessage":"","content":rows}
                    console.dir(result);
                    //sql.close();
                    callback(result);
                })
                .catch(function (err){
                    console.log(err);
                    result={"errorCode":"1","errorMessage":"程序错误","content":err}
                    //sql.close();
                    callback(result);
                });
            });
        }
    }
}