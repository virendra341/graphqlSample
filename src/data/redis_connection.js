import { RedisPubSub } from "graphql-redis-subscriptions";
import * as Redis from "ioredis";

export const pubsub = new RedisPubSub({
  connection: {
    host: process.env.REDIS_DOMAIN_NAME,
    port: process.env.PORT_NUMBER,
    retry_strategy: options => {
      // reconnect after
      return Math.max(options.attempt * 100, 3000);
    }
  }
});