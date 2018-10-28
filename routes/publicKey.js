module.exports = app => {
    app.get("/publicKey", (req,res) => {
        res.json({'publicKey': app.get("publicKey")});
    });
};