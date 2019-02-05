'use strict';
const DynamoDB = require('../lib/DynamoDB');

module.exports.handler = async (event, context) => {

    try {
        const email = event.pathParameters.email;        
        const dynamoDB = DynamoDB();
        const user = await dynamoDB
            .table(process.env.DB_USERS_TABLE_NAME)
            .where('email').eq(email)
            .consistent_read()
            .get();
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                user
            }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                failed: 'This user dos not exist'
            }),
        };
    }
};