import fastify from 'fastify';

const server = fastify();
server.register(require('fastify-sensible'));

server.post('/api', async (req, reply) => {
    // получаем тело запроса и переводим его в JSON
    const data = req.body as any;

    if (data.password !== 'super_pass') {
        console.log('no access');
    } else {
        console.log('Received data:', data);
        // Возвращаем статус и полученные данные клиенту
        reply.send({ status: 'success', received: data.your });
    }
});


server.get('/test', async (req, reply) => {
    return "this server2";
});

// Запускаем сервер на порту 3001
server.listen(3002, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server 2 is running on ${address}`);
});
