const express = require("express");

const app = express();
const port = Number(process.env.PORT || 3000);

app.get("/", (_request, response) => {
  response.type("text/plain").send("Bem-vindo ao site da Marvel e DC!");
});

app.get("/marvel", (_request, response) => {
  response.type("text/plain").send("Este é o universo de heróis da Marvel.");
});

app.get("/dc", (_request, response) => {
  response.type("text/plain").send("Este é o universo de heróis da DC.");
});

app.listen(port);
