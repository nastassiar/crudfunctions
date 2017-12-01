module.exports = function (context, req) {    
    var documents = context.bindingData.documents;
    if (documents == undefined || document.length == 0) {
        context.res = {
            status: 404, 
            body: "Document with id "+context.bindingData.id+" not found"
        };
    }
    else if (documents.length == 1 && req.body) {
        
        var document = documents[0];
        req.body.id = context.bindingData.id;
        context.bindingData.document = req.body;
        
        context.res = {
            status: 200, /* Defaults to 200 */
            body: req.body
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