module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log('NTask API - Port %s',app.get("port"));
    });
};