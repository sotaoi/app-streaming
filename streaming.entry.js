const { init } = require('@app/omni/init');
init();
const { startSocket } = require('@sotaoi/api/io');
const fs = require('fs');
const path = require('path');
const { getAppInfo } = require('@sotaoi/omni/get-app-info');

const main = async () => {
  const appInfo = getAppInfo();
  startSocket(
    appInfo.streamingPort,
    fs.readFileSync(path.resolve(appInfo.sslKey)),
    fs.readFileSync(path.resolve(appInfo.sslCert)),
    fs.readFileSync(path.resolve(appInfo.sslCa)),
  );
};

main();
