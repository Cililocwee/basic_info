const fs = require("fs");

function start(response) {
  fs.readFile("index.html", (err, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function about(response) {
  fs.readFile("about.html", (err, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function contact(response) {
  fs.readFile("contact-me.html", (err, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

exports.start = start;
exports.about = about;
exports.contact = contact;
