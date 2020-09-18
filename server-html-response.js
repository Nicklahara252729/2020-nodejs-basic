var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello <b>World</b>!');
    res.end();
}).listen(3000);

/*
*Fungsi dari res.writeHead(200, {'Content-Type': 'text/html'}); adalah untuk menentukan response header.
*Pada kode di atas, kita menentukan tipe responnya berupa text/html. Kita juga bisa menentukan tipe lain seperti JSON, PDF, XML, dan lain-lain.
*Lalu res.write('Hello <b>World</b>!'); fungsinya untuk menulis response body atau konten yang akan dikirim ke client.
*Terakhir mengakhiri respon dengan res.end().
*/

console.log("server running on http://localhost:3000");