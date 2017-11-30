const mongoose = require('mongoose');
const _ = require('lodash');
const Q = require('q');

module.exports = function(context, req)
{
    GameServer.deleteThing(context.bindingData.server)
        .then(() => {
            return context.res = {
                status: 200
            };
        })
        .catch((err) => {
            context.log(err, err.stack);

            return context.res = {
                status: 500
            };
        });
}