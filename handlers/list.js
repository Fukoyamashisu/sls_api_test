'use strict';
const DynamoDB = require('../lib/DynamoDB');

module.exports.handler = async (event, context) => {

    const dynamoDB = DynamoDB();
    const users = await dynamoDB
        .table(process.env.DB_USERS_TABLE_NAME)
        .scan();

    return {
        statusCode: 200,
        body: JSON.stringify({
            users
        }),
    };
};