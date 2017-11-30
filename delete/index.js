var DocumentDBClient = require('documentdb').DocumentClient;

var host = process.env[CosmosDB_endpoint];
var masterKey = process.env[ComosDB_authKey];
var databaseId = process.env[CosmosDB_databaseId];
var collectionId = process.env[CosmosDB_collectionId];

// Establish a new instance of the DocumentDBClient to be used throughout this demo
var client = new DocumentDBClient( host, { masterKey: masterKey });

module.exports = function(context, req)
{
    var docLink = 'dbs/' + databaseId + '/colls/' + collectionId + '/docs/' + docId;

    client.deleteDocument(docLink, function (err) {
        if (err) {
            context.res = {
                status: 500
            };
        } else {
            context.res = {
                status: 200
            };
        }
        context.done();
    });
}