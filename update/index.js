exports.update = (req, res, next) => {
    const data = req.body;
    const thingId = req.params.thing;

    Thing.update(thingId, data)
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