const fs = require("fs");
const util = require("util");

class FileWriter {
  constructor() {
    this.writer = util.promisify(fs.writeFile);
  }

  async write(filename, data) {
    try {
      await this.writer(filename, data);
      return true;
    } catch (err) {
      return false;
    }
    return;
  }
}

module.exports = FileWriter;
