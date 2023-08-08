import fastify from 'fastify'; 
import fetch from 'node-fetch'; 

const server = fastify();

server.get('/', async (req, reply) => {
    // Данные  определяются в теле запроса в виде JSON
    const response = await fetch('http://localhost:3002/api', {
        method: 'POST',
          body: JSON.stringify({ 
            your: 'payload here',
            password: 'super_pass' // Добавляем пароль в тело запроса
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    // Мы ожидаем ответ в формате JSON и возвращаем его в ответ
    const data = await response.json();

    return data;
});

server.get('/test', async (req, reply) => {
    return "this server1";  
});

server.listen(3001, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server 1 is running on ${address}`);
});
