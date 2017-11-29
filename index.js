const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const port = 3000;

const schema = require('./schema');


app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(port);
console.log('listening on', port);