import jsonServer from 'json-server';
const db = {
    accounts: [{
            "name": "asd",
            "password": "asd",
            'id': 1,
        },
        {
            "name": "ExampleName1",
            "password": "ExamplePassword1",
            'id': 2,
        },
    ]
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});