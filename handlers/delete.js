'use strict';
const DynamoDB = require('../lib/DynamoDB');

module.exports.handler = async (event, context) => {

    try {
        const { email, ...rest} = JSON.parse(event.body)
        const dynamoDB = DynamoDB();

        await dynamoDB
            .table(process.env.DB_USERS_TABLE_NAME)
            .where('email').eq(email)
            .delete();

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: 'User was deleted with success'
            }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: err
            }),
        };
    }
};