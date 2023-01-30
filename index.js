const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

let handle = {};

handle["/"] = requestHandlers.start;
handle["/home"] = requestHandlers.start;
handle["/about"] = requestHandlers.about;
handle["/contact-me"] = requestHandlers.contact;

server.start(router.route, handle);
