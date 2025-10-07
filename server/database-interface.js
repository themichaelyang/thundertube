class DatabaseInterface {
  connect(path) {
    throw Error('connect is undefined');
  }

  saveAllCodes(allCodes) {
    throw Error('saveAllCodes is undefined');
  }

  loadAllCodes() {
    throw Error('loadAllCodes is undefined');
  }
}