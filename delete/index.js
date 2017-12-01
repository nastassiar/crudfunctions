var DocumentDBClient = require('documentdb').DocumentClient;

var host = process.env["CosmosDBEndpoint"];
var masterKey = process.env["CosmosDBAuthKey"];
var databaseId = process.env["DatabaseName"];
var collectionId = process.env["CollectionName"];

var client = new DocumentDBClient( host, { masterKey: masterKey });
// Establish a new instance of the DocumentDBClient to be used throughout 


module.exports = function(context, req)
{
   console.log(masterKey);
    var docLink = 'dbs/' + databaseId + '/colls/' + collectionId + '/docs/' + context.bindingData.id;
    console.log(docLink);
    if (documents.length == 0) {
        context.res = {
            status: 404, 
            body: "Document with id "+context.bindings.id+" not found"
        };
        context.done();
    }
    else {     
        client.deleteDocument(docLink, function (err) {
            if (err) {
                context.res = {
                    status: 500,
                    message: error
                };
            } else {
                context.res = {
                    status: 200
                };
            }
            context.done();
        });
    }
}