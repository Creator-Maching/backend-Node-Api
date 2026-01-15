import http from "http";
import { listPlayers, createPlayer } from "./players.js";

const server = http.createServer((req, res) => {
  // headers padrão
  res.setHeader("Content-Type", "application/json");

  // GET /players
  if (req.method === "GET" && req.url === "/players") {
    const players = listPlayers();
    res.writeHead(200);
    return res.end(JSON.stringify(players));
  }

  // POST /players
  if (req.method === "POST" && req.url === "/players") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);

        if (!data.name || !data.powerLevel) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: "Dados inválidos" }));
        }

        const player = createPlayer(data.name, data.powerLevel);
        res.writeHead(201);
        res.end(JSON.stringify(player));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "JSON inválido" }));
      }
    });

    return;
  }

  // rota não encontrada
  res.writeHead(404);
  res.end(JSON.stringify({ error: "Rota não encontrada" }));
});

server.listen(3000, () => {
  console.log("API rodando em http://localhost:3000/players");
});
