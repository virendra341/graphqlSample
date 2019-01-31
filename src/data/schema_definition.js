
import * as types from "./types";
import * as inputs from "./inputs";

import { Query } from "./query_definition";
import { Mutation } from "./mutation_definition";

export const typeDefs = [
    types.User,
    inputs.UserInput,
    Query,
    Mutation,
    `schema {
        query: Query,
        mutation: Mutation
    }
    `
]