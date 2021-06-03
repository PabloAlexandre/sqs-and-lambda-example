const { Consumer } = require('sqs-consumer');
const AWS = require('../services/aws');
const config = require('../services/load-conf');

const app = Consumer.create({
  queueUrl: config.get('queueUrl'),
  pollingWaitTimeMs: 1000 * 60, // 1 minute
  batchSize: 10,
  handleMessageBatch: async (messages) => {
    console.log({ messages })
  },
  sqs: new AWS.SQS(),
});
 
app.on('error', (err) => {
  console.error(err.message);
});
 
app.on('processing_error', (err) => {
  console.error(err.message);
});
 
app.start();
console.log('Consumer --- Listening queue inputs')