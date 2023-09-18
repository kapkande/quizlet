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
    ],
    lessons: [
        {
            'id': 'b1_1',
            'data': [
                [`mother tongue`, `a language that a person has learned from birth or the first few years of life`],
                [`learning strategy`, `intentional use of one or more cognitive processes for a particular learning task`],
                [`foreign`, `belonging to, situated in, or derived from another country.`],
                [`native speaker`, `a person who has spoken a particular language since early childhood`],
                [`slang `, `an informal, often short-lived kind of language used in place of standard words`],
                [`jargon`, `vocabulary distinctive to a particular group of people`],
                [`fluency`, `the ability to accurately read and speak with speed and expression`],
                [`accuracy`, `the quality or state of being correct or precise.`],
                [`bilingualable`, `to speak two different languages`],
            ]

        },
        {
            'id': 'b1_2',
            'data': [
                [`mother tongue`, `a language that a person has learned from birth or the first few years of life`],
                [`learning strategy`, `intentional use of one or more cognitive processes for a particular learning task`],
            ]

        }

    ],
    accounts: [
        {
            "name": "ExampleName1",
            "password": "asd",
            'id': 1,
        },
        {
            "name": "ExampleNam15e1",
            "password": "ExamplePassword1",
            'id': 'ExampleName1',
        },
    ],
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