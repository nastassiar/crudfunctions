module.exports = function (context, req) {    
    if (req.body) 
    {
        if (req.body.id == undefined || req.body.id == null)
        {
            req.body.id = Math.random().toString(26).slice(2)
        }
        context.bindings.document = req.body;
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