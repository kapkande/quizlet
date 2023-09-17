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
    lessons: {
        b1_1: [
            { term: 'mother tongue', definition: 'a language that a person has learned from birth or the first few years of life' },
            { term: 'learning strategy', definition: 'intentional use of one or more cognitive processes for a particular learning task' },
            { term: 'foreign', definition: 'belonging to, situated in, or derived from another country.' },
            { term: 'native speaker', definition: 'a person who has spoken a particular language since early childhood' },
            { term: 'slang', definition: 'an informal, often short-lived kind of language used in place of standard words' },
            { term: 'jargon', definition: 'vocabulary distinctive to a particular group of people' },
            { term: 'fluency', definition: 'the ability to accurately read and speak with speed and expression' },
            { term: 'accuracy', definition: 'the quality or state of being correct or precise.' },
            { term: 'bilingualable', definition: 'to speak two different languages' }
        ],
        b1_2: [
            { term: 'mother tongue', definition: 'a language that a person has learned from birth or the first few years of life' },
            { term: 'learning strategy', definition: 'intentional use of one or more cognitive processes for a particular learning task' },
            { term: 'foreign', definition: 'belonging to, situated in, or derived from another country.' },
            { term: 'native speaker', definition: 'a person who has spoken a particular language since early childhood' },
            { term: 'slang', definition: 'an informal, often short-lived kind of language used in place of standard words' },
            { term: 'jargon', definition: 'vocabulary distinctive to a particular group of people' },
            { term: 'fluency', definition: 'the ability to accurately read and speak with speed and expression' },
            { term: 'accuracy', definition: 'the quality or state of being correct or precise.' },
            { term: 'bilingualable', definition: 'to speak two different languages' }
        ],

    }
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