

import * as definitions from "./definitions/query";

export const Query = `
    type Query {
        ${definitions.userDefinition}
    }
`;