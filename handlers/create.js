'use strict';
const DynamoDB = require('../lib/DynamoDB');

module.exports.handler = async (event, context) => {

    try {
        const data = JSON.parse(event.body)
        const dynamoDB = DynamoDB();

        await dynamoDB
            .table(process.env.DB_USERS_TABLE_NAME)
            .insert(data).then(res => res);

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: 'User was created with success'
            }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                failed: 'User already exist'
            }),
        };
    }
};