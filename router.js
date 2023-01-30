const fs = require("fs");

function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](response);
  } else {
    fs.readFile("404.html", (err, data) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  }
}

exports.route = route;
