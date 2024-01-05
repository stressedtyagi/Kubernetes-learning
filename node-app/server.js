const http = require("http"),
  fs = require("fs");

const handler = (request, response) => {
  fs.readFile("/etc/config/CUSTOM_HEADER", "UTF-8", (err, fileData) => {
    if (err) {
      console.log(err);
      return;
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(
        "'ENEMIES' (from env variable): " + process.env.CUSTOM_HEADER + "<br />"
      );
      response.write("'CUSTOM_HEADER' (from volume): " + fileData);
      response.end();
    }
  });
};

const www = http.createServer(handler);
www.listen(9000);
