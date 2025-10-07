const fsPromises = require('fs').promises;
const DatabaseInterface = require('./database-interface.js').DatabaseInterface;

class Filesystem extends DatabaseInterface {
  constructor() {
    super();
  }

  async connect(path) {
    this.path = path;
  }

  saveAllCodes(allCodes) {
    return fsPromises.writeFile(path, allCodes, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }

  loadAllCodes() {
    return fsPromises.readFile(this.path, (err, _data) => {
      if (err) throw err;
      console.log('The file has been read!');
    })
  }
}

exports.Filesystem = Filesystem;