import { startSocket } from '@sotaoi/api/io';
import path from 'path';
import { Config } from '@sotaoi/config';
import { getAppInfo } from '@sotaoi/omni/get-app-info';
import envJson from '@app/streaming/env.json';

Config.init(envJson, {});
getAppInfo({ dumpEnvVars: () => Config.dumpEnvVars() });

process.env.SSL_KEY = path.resolve(path.dirname(require.resolve('@sotaoi/omni/package.json')), 'certs', 'privkey.pem');
process.env.SSL_CERT = path.resolve(path.dirname(require.resolve('@sotaoi/omni/package.json')), 'certs', 'cert.pem');
process.env.SSL_CA = path.resolve(path.dirname(require.resolve('@sotaoi/omni/package.json')), 'certs', 'bundle.pem');

const main = async () => {
  const STREAMING_PORT = Config.get('STREAMING_PORT');
  if (typeof STREAMING_PORT !== 'string') {
    throw new Error('Failed to establish STREAMING_PORT');
  }
  startSocket(STREAMING_PORT);
};

main();
