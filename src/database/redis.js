import redis from "redis";

export const client = redis.createClient({
  host: "localhot",
  port: 6379,
});