import { PrismaClient } from "@prisma/client";

export const DB = new PrismaClient();

DB.snippet.create({
  data: {
    title: "Hello World!",
    code: "console.log('Hello, World!');",
  },
});
