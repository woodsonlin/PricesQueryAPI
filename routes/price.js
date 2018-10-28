var queryString=require('querystring');
var url=require('url');

module.exports = app => {
    const priceQuery=app.models.price;
    app.get("/price/:sampleid",(req,res)=>{        
        var sampleid=req.params.sampleid;
        var urlObj=url.parse(req.url);
        var query=urlObj.query + "&sampelID=" + sampleid ;
        console.log(query);
        var queryObj=queryString.parse(query);
        console.dir(queryObj);
        priceQuery.query(queryObj,(tasks)=>{
            if(tasks.errorCode==0)
                res.json(tasks.content);
            else
                res.json(tasks);
        })        
    })
}