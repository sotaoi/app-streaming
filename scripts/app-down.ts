#!/bin/env node

import { bootstrapRoutine } from '@app/proxy/scripts/routines/bootstrap-routine';
import { Store } from '@sotaoi/api/store';
import { logger } from '@sotaoi/api/logger';

const main = async () => {
  const done = await bootstrapRoutine();
  await Store.setMaintenance(true);
  await done();
  logger().info('App is now in maintenance mode');
  return;
};

main();
