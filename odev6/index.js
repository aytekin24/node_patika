const Koa = require("koa");
const app = new Koa();

app.use((ctx,next) => {
    const url=ctx.url;
  if (url === "/") {
    ctx.body = "<h1>Anasayfaya hosgeldiniz</h1>";
  } else if (url === "/hakkimda") {
    ctx.body="<h1>Hakkimda sayfasina hosgeldiniz</h1>";
  } else if (url === "/iletisim") {
    ctx.body="<h1>İletişim sayfasina hosgeldiniz</h1>";
  }
});
app.listen(3000);


