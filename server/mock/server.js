// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: "./node_modules/json-server/public",
});

const port = 3001;

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running on " + port);
});
