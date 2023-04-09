const Koa = require("koa");

const app = new Koa();

app.listen(5052, () => {
  console.log(`gpt-chat server running on port 5052`);
});
