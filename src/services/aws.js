const AWS = require('aws-sdk');
const config = require('./load-conf');

AWS.config.update({
  region: config.get('aws.region'),
  accessKeyId: config.get('aws.accessKey'),
  secretAccessKey: config.get('aws.secretKey'),
});

if(config.get('queueUrl').includes('localhost')) {
  AWS.config.update({ 
    sqs: {
      endpoint: 'http://localhost:4576'
    }
  })
}

module.exports = AWS;