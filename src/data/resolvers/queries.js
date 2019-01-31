
import * as userQuery from "./query/user_query";

export const resolverQuery = () => {
    return {
        users: userQuery.users()
    }
}