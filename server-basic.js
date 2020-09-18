var http = require('http');
//Fungsi kode tersebut adalah untuk mengimpor library http dari node_modeuls.
//Library http berfungsi untuk menangani protokol http seperti membuat dan menerima request

var server = http.createServer(function (req, res) {
    res.end("Hi, selamat datang di nodejs");
});
//Server yang kita buat, akan merespon dengan "Hi, selamat datang di nodejs" saat diakses oleh client.

server.listen(3000);

console.log("server running on http://localhost:3000");