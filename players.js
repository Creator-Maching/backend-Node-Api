import { readDB, writeDB } from "./db.js";

export function createPlayer(name, powerLevel) {
  const db = readDB();

  const id = `p_${Date.now()}`;

  db.players[id] = {
    id,
    name,
    powerLevel
  };

  writeDB(db);

  return db.players[id];
}

export function listPlayers() {
  const db = readDB();
  return Object.values(db.players);
}

export function deletePlayer(id) {
  const db = readDB();

  if (!db.players[id]) {
    throw new Error("Player não existe");
  }

  delete db.players[id];
  writeDB(db);
}
