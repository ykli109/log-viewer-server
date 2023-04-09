const { readBunyanLogFile } = require("./readLog");

readBunyanLogFile("/Users/lyk/github/log/gpt-chat-server/error.log").then(
  (data) => {
    console.log(data);
  }
);
