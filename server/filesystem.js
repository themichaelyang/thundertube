const fs = require('fs');
const DatabaseInterface = require('./database-interface.js');

class Filesystem extends DatabaseInterface {
  constructor() {}

  async connect(path) {
    this.path = path;
  }

  saveAllCodes(allCodes) {
    fs.writeFileSync(path, allCodes);
  }

  loadAllCodes() {
    return JSON.parse(fs.readFileSync(this.path));
  }
}