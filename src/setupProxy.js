const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/forecast",
    proxy({
      target: "https://api1.poocoin.app",
      changeOrigin: true,
    })
  );
};
