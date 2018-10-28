var sql = require('mssql');
var db1config = require('../libs/db1config.js');
var moment=require('moment');

module.exports = app =>{
    return {
        query: (params,callback) => {},
        insert : (params, callback) => {
            var userid = params.userUID;
            var userName = params.userName;
            var password = params.passwprd;
            
        },
        update : (params, callback) => {},
        delete : (params, callback) => {}
    }
}