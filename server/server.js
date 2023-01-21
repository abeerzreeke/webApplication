const WebSocket = require('ws');
const crypto = require('crypto');

const wss = new WebSocket.Server({ port: 8080 });

// Mock "database" to store connected clients
const clients = [];

wss.on('connection', (ws) => {
    const userRole = clients.length ? 'user': 'mentor';
    const userId = crypto.randomBytes(4).toString('hex');
    // Add new client to the mock "database"
    let _client = {
        id: userId,
        role: userRole,
    }
    ws.send(JSON.stringify({type: 'auth', data: _client}));
    ws._client = _client;
    clients.push(ws);

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        let message_object = JSON.parse(message);
        if(message_object.page && message_object.input) {
            // loop over clients
            clients.forEach((client) => {
                if(client._client.role == 'mentor') {
                    client.send(JSON.stringify({type: 'input', 'data': message_object}));
                }
            });
        }
    });

    ws.on('close', () => {
        // Remove client from the mock "database"
        // clients.delete(ws);
    });
});

console.log('WebSocket server started on port 8080');
