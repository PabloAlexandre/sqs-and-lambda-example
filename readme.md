# SQS and Lambda using Serverless

## Getting Started

first, install all dependencies:

```
npm install
```

after that, run docker-compose to provide a local infrastructure

```
docker-compose up -d
```

now we will run our project. in two different shells, run:

```
npm run lambda:dev
```

and 

```
npm run consumer:dev
```

### Send requests

to create requests, make a post to `http://localhost:3000/dev/save` with following payload:

```json
{
  "question": 1,
  "answer": 2
}
```

