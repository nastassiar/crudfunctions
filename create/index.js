module.exports = function (context, req) {    
    if (req.body) {
    //if (req.body && req.body.name) {

        context.bindings.document = req.body;
        // Set an id?
        context.res = {
            status: 200, /* Defaults to 200 */
            body: req.body
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Request body required."
        };
    }       
    context.done();
};