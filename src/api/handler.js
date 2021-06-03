"use strict";

const { SQS } = require('../services/aws')
const config = require('../services/load-conf');

const sqs = new SQS();

const res = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body, null, 2)
})

module.exports.save = async ({ body }, ...args) => {
  const payload = JSON.parse(body);
  
  console.log(JSON.stringify({
    question: payload.question,
    answer: payload.answer
  }))

  const data = await sqs.sendMessage({
    QueueUrl: config.get('queueUrl'),
    MessageBody: JSON.stringify({
      question: payload.question,
      answer: payload.answer
    })
  }).promise()
  
  console.log(data);

  return res(200, { message: 'saved!' })
};
