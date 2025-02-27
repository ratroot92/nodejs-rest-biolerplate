const ampqlib = require('amqplib');

class RabbitMq {
  connection;
  channels;

  async initConnection() {
    this.connection = await ampqlib.connect(`amqp://127.0.0.1:5672`, {
      username: 'guest',
      password: 'guest',
    });
    return this;
  }

  async createChannel() {
    this.connection.createChannel();
    return this;
  }


  async createExchange() {
    this.connection.createChannel();
    return this;
  }




  async sendMessageToQueue() {
    const connection = await ampqlib.connect(`amqp://127.0.0.1:5672`, {
      username: 'guest',
      password: 'guest',
    });

    const channel = await connection.createChannel();
    const queueName1 = 'test_queue_1';
    const queueName2 = 'test_queue_2';

    const exchangeName = 'test_exchange';
    const exchangeType = 'direct';
    const exchangeRoutingKey = 'test_exchange_routing_key';
    await channel.assertExchange(exchangeName, exchangeType, {
      durable: false,
    });
    await channel.assertQueue(queueName1, { durable: false });
    await channel.assertQueue(queueName2, { durable: false });

    await channel.bindQueue(queueName1, exchangeName, exchangeRoutingKey);
    await channel.bindQueue(queueName2, exchangeName, exchangeRoutingKey);

    await channel.publish(
      exchangeName,
      exchangeRoutingKey,
      Buffer.from(JSON.stringify({ name: 'Ahmad' }))
    );
  }

  async receiveMessage1() {
    const connection = await ampqlib.connect(`amqp://localhost`);
    const channel = await connection.createChannel();
    const queueName = 'test_queue_1';

    await channel.assertQueue(queueName, { durable: false });
    await channel.consume(queueName, (message) => {
      console.log(`Recieved by ${queueName} =>`, message.content.toString());
    });
  }
  async receiveMessage2() {
    const connection = await ampqlib.connect(`amqp://localhost`);
    const channel = await connection.createChannel();
    const queueName = 'test_queue_2';

    await channel.assertQueue(queueName, { durable: false });
    await channel.consume(queueName, (message) => {
      console.log(`Recieved by ${queueName} =>`, message.content.toString());
    });
  }
}

module.exports = new RabbitMq();
