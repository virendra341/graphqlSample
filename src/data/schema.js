import { makeExecutableSchema } from "graphql-tools";

import { typeDefs } from "./schema_definition";
import { resolvers, pubsub } from "./resolvers";

const schema = new makeExecutableSchema({
    typeDefs,
    resolvers
});

export { pubsub }
export default schema;