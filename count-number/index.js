const redis = require('redis');
const express = require('express');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('counter', 0);

const app = express();

app.get('/', (req, res) => {
    client.get('counter', (err, counter) => {
        res.send('Page visitor counter ' + counter);
        client.set('counter', parseInt(counter) + 1);
    });
});

app.listen(4001, () => {
    console.log('listening at 4001');
});