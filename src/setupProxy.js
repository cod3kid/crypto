const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/",
    proxy({
      target: "https://api1.poocoin.app",
      changeOrigin: true,
      // ws: true, // proxy websockets
      // secure: f
    })
  );
};
