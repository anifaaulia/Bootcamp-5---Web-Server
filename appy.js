const fs = require("fs");
const http = require("http");

//fungsi untuk renderHTML
const HTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error : Page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http

  .createServer((req, res) => {
    const url = req.url; //menambahkan url
    console.log(url);

    //menambahkan content type html
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    //menghubungkan halaman about dengan html
    if (url === "/about") {
      HTML("./about.html", res);
      // res.write("<h1>Ini Halaman Page</h1>"); //pakai bahasa HTML
      // fs.readFile("./about.html", (err, data) => {
      //   if (err) {
      //     res.writeHead(404);
      //     res.write("Error : Page not found");
      //   } else {
      //     res.write(data);
      //   }
      //   res.end();
      // });
    }

    //menguhubungkan halaman contact dengan html
    else if (url === "/contact") {
      HTML("./contact.html", res);
      // res.write("<h1>Ini Halaman Contact</h1>"); //pakai bahasa HTML
      // fs.readFile("./contact.html", (err, data) => {
      //   if (err) {
      //     res.writeHead(404);
      //     res.write("Error : Page not found");
      //   } else {
      //     res.write(data);
      //   }
      //   res.end();
      // });

      //menghubungkan halaman home dengan index.html
    } else {
      // res.write("Haii Anifa Nyoba Web Server");
      HTML("./index.html", res);
      // fs.readFile("./index.html", (err, data) => {
      //   if (err) {
      //     res.writeHead(404);
      //     res.write("Error : Page not found");
      //   } else {
      //     res.write(data);
      //   }
      //   res.end();
      // });
    }
  })

  //menjalankan server dengan port
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
