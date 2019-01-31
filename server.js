import { ApolloServer, PubSub } from "apollo-server"
import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import bodyParser from "body-parser"
import express from "express"
import schema from './src/data/schema';
import { } from "./src/data/mongo_connection";
export const pubsub = new PubSub();

const GraphQLServer = express(); //.use('*', cors());

let PORT = 4011;

const WS_GQL_PATH = '/subscriptions';

if (process.env.PORT) {
    PORT = parseInt(process.env.PORT, 10) + 100;
}

// basic health route, ping /health to determine server health
GraphQLServer.get('/health', (req, res) => {
    res.sendStatus(200);
});

// graphiql explorer
// ping /graphiql for an in-browser GUI explorer
GraphQLServer.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

// graphql endpoint
GraphQLServer.use(
    '/',
    bodyParser.json(),
    graphqlExpress({
        schema,
        graphiql: true,
        pretty: true
    })
);

// GraphQL
const server = new ApolloServer({
    schema,
    context: async (req) => {
        if (!req || !req.headers) {
            return;
        }

        const token = req.headers.authorization || "";
        const checkToken = await userController.findOrCreateUser(token);
        if (!checkToken.hasOwnProperty("authorized")) {
            return { user: checkToken, authorized: true };
        }
        return checkToken;
    },
    tracing: true
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
