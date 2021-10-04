import { config } from '@app/omni/config';
config('');
import { startSocket } from '@sotaoi/api/io';
import fs from 'fs';
import path from 'path';
import { getAppInfo } from '@sotaoi/omni/get-app-info';

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
