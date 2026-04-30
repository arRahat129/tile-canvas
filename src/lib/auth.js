// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.TILE_CANVAS_DB_URI);
// const db = client.db("tile-canvas");

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         client
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.TILE_CANVAS_DB_URI;

let dbAdapter = undefined;

if (uri) {
    const client = new MongoClient(uri);
    const db = client.db("tile-canvas");

    dbAdapter = mongodbAdapter(db, { client });
}

export const auth = betterAuth({
    database: dbAdapter, // will be undefined if no URI
    emailAndPassword: {
        enabled: true,
    },
});