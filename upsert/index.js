exports.upsert = (req, res, next) => {
    const data = req.body;
    const {me: mc, wp} = data;
    const things = [mc].concat(wp);

    things.reduce((p, thing) => {
        const nextIteration = Q.defer();

        p.then(() => {
            Thing.upsert(thing)
            .then(() => {
                return nextIteration.resolve();
            })
            .catch((err) => {
                return nextIteration.reject(err);
            });
        });

        return nextIteration.promise;
    }, Q.when())
    .then(() => {
        return res.json({
            status: true
        });
    })
    .catch((err) => {
        console.log(err, err.stack);
        next(err);
    });
};