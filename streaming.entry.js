const { init } = require('@app/omni/init');
init();
const { startSocket } = require('@sotaoi/api/io');
const fs = require('fs');
const { getAppInfo } = require('@sotaoi/omni/get-app-info');

const main = async () => {
  const appInfo = getAppInfo();
  startSocket(
    appInfo.streamingPort,
    fs.readFileSync(require.resolve(appInfo.sslKey)),
    fs.readFileSync(require.resolve(appInfo.sslCert)),
    fs.readFileSync(require.resolve(appInfo.sslCa)),
  );
};

main();
