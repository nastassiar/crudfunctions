module.exports = function (context, req) {    
    var documents = context.bindings.documents;
    if (documents.length == 1 && req.body) {
        
        var document = documents[0];
        req.body.id = context.bindings.id;
        context.bindings.document = req.body;
        
        context.res = {
            status: 200, /* Defaults to 200 */
            body: req.body
        };
    }
    else if (documents.length == 0) {
        context.res = {
            status: 404, 
            body: "Document with id "+context.bindings.id+" not found"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Error"
        };
    }       
    context.done();
};