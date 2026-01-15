import fs from "fs";

const raw = fs.readFileSync("db.json", "utf-8");
const db = JSON.parse(raw);

console.log(db);