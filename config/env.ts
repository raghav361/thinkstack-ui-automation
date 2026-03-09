import dotenv from "dotenv";
import path from "path";

const environment = process.env.ENV || "dev";

dotenv.config({
  path: path.resolve(process.cwd(), `env/${environment}.env`)
});

export const env = {
  baseURL: process.env.BASE_URL!,
  user: process.env.THINKSTACK_USER!,
  password: process.env.THINKSTACK_PASSWORD!,
};

if (!env.user || !env.password) {
  throw new Error("Missing USER_EMAIL or USER_PASSWORD environment variables");
}