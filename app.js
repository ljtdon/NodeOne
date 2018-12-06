const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>EnterMessage</title></head>");
    res.write(
      '<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    res.on();
    fs.writeFileSync("message.txt", "dummy text");
    // res.writeHead(302, {}); ili u dva steps
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Page</title></head>");
  res.write("<body><p>Hi</p></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
