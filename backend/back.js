import jsonServer from 'json-server';
const db = {
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
                ['boss', 'the person who employs you and who is in charge of you at work'],
                ['classmate', 'someone who is in the same as you at school or college'],
                ['employee', 'someone who receives a salary to work for an organisation, person or company'],
                ['fiance', 'the man whom a woman is going to marry'],
                ['fiancee', 'the woman whom a man is going to marry'],
                ['godfather', `a man who promises at a baptism ceremony to help a child, and to teach him or her Christian values`],
                ['godmother', 'a woman who promises at a baptism ceremony to help a child, and to teach him or her Christian values'],
                [`mentor`, `someone who advises and helps a less experinced partner`],
                [`student`, `a child in a school`],
                [`teammate`, `someone who belongs to the same team as you`],
                [`partner`, `a person who does something with someone else`],
                [`acquaintance`, `a person known to one, but usually not a close friend`],
                [`to get engaged`, `you become fiancé or fiancée`]
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