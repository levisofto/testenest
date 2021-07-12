import { Client } from '@elastic/elasticsearch';
import * as AWS from 'aws-sdk';
const createAwsElasticsearchConnector = require('aws-elasticsearch-connector');

require('dotenv').config();

const awsConfig = new AWS.Config({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ELASTIC_ACCESS_KEY,
  secretAccessKey: process.env.AWS_ELASTIC_SECRET_KEY_ID,
});

const Elastic = new Client({
  ...createAwsElasticsearchConnector(awsConfig),
  node: process.env.AWS_ELASTIC_URL,
});

export default Elastic;