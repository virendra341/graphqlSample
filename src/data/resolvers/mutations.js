
import * as userMutation from "./mutation/user_mutation";

export const resolverMutation = (pubsub) => {
    return {
        createUser: userMutation.createUser(pubsub)
    }
}