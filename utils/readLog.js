const fs = require("fs");
const path = require("path");

const readBunyanLogFile = async (filePath) => {
  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const lines = fileContent.split("\n").filter((line) => line.trim());
    const jsonArray = lines.map((line) => JSON.parse(line));
    return jsonArray;
  } catch (error) {
    console.error("Error while reading and parsing file:", error);
    throw error;
  }
};

module.exports = {
  readBunyanLogFile,
};
