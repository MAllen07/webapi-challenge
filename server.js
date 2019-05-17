const express = require("express");
const server = express();

const actionsRouter = require("./actions/actions-router.js");
const projectsRouter = require("./projects/projects-router.js");

server.use(express.json());
server.use("/actions", actionsRouter);
server.use("/projects", projectsRouter);

server.get("/", (req, res) => {
  res.send({
    welcome: process.env.HELLO
  });
});

module.exports = server;
