import { createPlayer, listPlayers, deletePlayer } from "./players.js";

console.log("Criando player...");
const player = createPlayer("Pedro", 7);
console.log(player);

console.log("\nListando players...");
console.log(listPlayers());

// Teste de remoção (opcional)
// deletePlayer(player.id);
