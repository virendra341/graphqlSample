
import { resolverQuery } from "./resolvers/queries";
import { resolverMutation } from "./resolvers/mutations";

const resolvers = {
  Query: resolverQuery(),
  Mutation: resolverMutation(),
}

export { resolvers }