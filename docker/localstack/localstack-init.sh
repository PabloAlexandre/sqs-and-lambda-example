#!/bin/sh
sleep 10;

QUEUE_NAMES=(
  'save-data'
  'save-data-dlq'
)
for queueName in "${QUEUE_NAMES[@]}"
do
  aws --endpoint-url=http://localstack:4566 sqs create-queue --queue-name $queueName --output text;
done

tail -f /dev/null