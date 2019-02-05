const DynamodbFactory = require('@awspilot/dynamodb')
const AWS = require('aws-sdk');


const dbConfig = {
    region: process.env.AWS_REGION || 'localhost',
    apiVersion: '2012-08-10',
}

if(process.env.IS_OFFLINE){
    Object.assign(
        dbConfig, 
        {
            endpoint: 'http://localhost:8000',
        }
    )
}

const DynamoDB = () => new DynamodbFactory(dbConfig);

module.exports =DynamoDB;