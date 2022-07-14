# aws-sqs
An example for sending and receiving sqs messages between a producer and consumer.

# [Usage scenarios](https://fate-othnielia-659.notion.site/Usage-scenarios-d04aed108bf84f48a1ee5084ec1b261b)

## Prerequisite
- [Create an IAM user and a SQS queue](https://fate-othnielia-659.notion.site/Setup-general-eab6d9e66d414d879063747b7930ac01)

## Installation
- `git clone https://github.com/Josh-Chang/aws-sqs.git`
- `cd sqs-consumer`
- `yarn`
- add your own aws region, accessKeyId, secretAccessKey and queueUrl
- so does sqs-producer

## Run
- `node index.mjs`
