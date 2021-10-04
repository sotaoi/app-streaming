#!/bin/env node

import fs from 'fs';
import path from 'path';

const main = async (): Promise<void> => {
  !fs.existsSync(path.resolve('./env.json')) &&
    fs.copyFileSync(path.resolve('./env.example.json'), path.resolve('./env.json'));
};

main();
