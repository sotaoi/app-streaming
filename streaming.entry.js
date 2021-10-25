process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { init } = require('@app/omni/init');
init();
const { startSocket } = require('@sotaoi/api/io');
const fs = require('fs');
const { getAppInfo } = require('@sotaoi/omni/get-app-info');
// const { state, resetState } = require('@app/streaming/state');
// const nodeFetch = require('node-fetch');

// let timeout = null;

const main = async () => {
  // clearTimeout(timeout);

  const appInfo = getAppInfo();

  // const timeoutFn = async () => {
  //   clearTimeout(timeout);
  //   try {
  //     const apiStatus = await (await nodeFetch(`https://${appInfo.proxyDomain}/api/status`)).json();
  //     state.maintenance = !!apiStatus.xdata.maintenance;
  //     setTimeout(timeoutFn, 1000);
  //   } catch (err) {
  //     console.error(err);
  //     resetState();
  //     setTimeout(timeoutFn, 1000);
  //   }
  // };
  // timeout = setTimeout(timeoutFn, 1000);

  startSocket(
    appInfo.streamingPort,
    fs.readFileSync(require.resolve(appInfo.sslKey)),
    fs.readFileSync(require.resolve(appInfo.sslCert)),
    fs.readFileSync(require.resolve(appInfo.sslCa)),
  );
};

main();
