import { Consumer } from 'sqs-consumer';
import AWS from 'aws-sdk';

// Access key: IAM user `healthbot20-sqs`
AWS.config.update({
  region: 'ap-northeast-1',
  accessKeyId: '',
  secretAccessKey: ''
});

const app = Consumer.create({
  queueUrl: '',
  handleMessage: async (message) => {
    console.log('message received:', JSON.stringify(message));
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.on('timeout_error', (err) => {
 console.error(err.message);
});

app.start();