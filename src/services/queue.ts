import { Consumer } from 'sqs-consumer';
import * as AWS from 'aws-sdk';
import Elastic from './elastic';

const config = new AWS.Config({
  region: 'eu-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY_ID,
});
const queue = Consumer.create({
  region: 'eu-east-1',
  queueUrl: process.env.AWS_SQS_URL,
  handleMessage: async (message) => {
    Elastic.index({
      index: 'teste_index',
      body: { message: message.Body }
    }, (err, result) => {
      console.log(result)
    })

    //   Elastic.search({
    //   index: 'teste_index',
    //   body: {
    //     query: {
    //       match: { message: 'teste' }
    //     }
    //   }
    // }, (err, result) => {
    //   console.log(result.body)
    // })
  },
  sqs: new AWS.SQS(config),
});

queue.on('empty', () => console.log('Queue closed'));

queue.on('error', (err) => {
  console.error(err.message);
});

queue.on('processing_error', (err) => {
  console.error(err.message);
});

export default queue;
