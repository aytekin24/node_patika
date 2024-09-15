const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Index sayfasina hosgeldiniz</h2>')
    } else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hakkimda sayfasina hosgeldiniz</h2>')
    } else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>İletişim sayfasina hosgeldiniz</h2>')
    }
    res.end();
});
const port = 5000;
server.listen(port, () => {
    console.log(`Sunucu ${port} port başlatıldı`);
})