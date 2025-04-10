import * as dotenv from "dotenv";
dotenv.config();

const host = process.env.DB_HOST || "localhost";
const port = Number(process.env.DB_PORT) || 5432;
const user = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "3340";
const database = process.env.DB_NAME || "bdescuela";




