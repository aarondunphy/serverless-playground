"use strict";
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_USERS_TABLE,
    Item: {
      primary_key: uuidv4(),
      ...body,
    },
  };
  await dynamoDb.put(putParams).promise();

  return {
    statusCode: 201,
  };
};
