"use strict";
const AWS = require("aws-sdk");

module.exports.handler = async (event) => {
  const scanParams = {
    TableName: process.env.DYNAMODB_USERS_TABLE,
  };

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.scan(scanParams).promise();

  if (result.Count === 0) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      total: result.Count,
      items: await result.Items,
    }),
  };
};
