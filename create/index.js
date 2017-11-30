exports.create = (req, res, next) => {
    
    const data = req.body;
    thing.insertThing(data)
    .then((server) => {
        return res.json({
            status: true,
            message: server
        });
    })
    .catch((err) => {
        console.log(err, err.stack);        
        next(err);
    });
};