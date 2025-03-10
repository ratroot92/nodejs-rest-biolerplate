require('./config/env-config');
const app = require(`./app`);

//
require(`./brokers/rabbit-mq-amqplib/index`);

app.listen(process.env.PORT, process.env.HOST, (err) => {
  if (!err) {
    console.log(
      `Server in '${process.env.NODE_ENV}' mode listening at '${process.env.HOST}:${process.env.PORT}'`
    );
  }
});
