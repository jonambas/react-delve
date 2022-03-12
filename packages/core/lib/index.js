import path from 'path';
import start from './start.js';

function makeDefaultConfig(config) {
  return {
    output: 'delve.json',
    include: 'src/**/!(*.test|*.spec).@(js|ts)?(x)',
    ignore: ['node_modules'],
    from: ['package/a'],
    // ignoreSubComponents: false,
    ...config
  };
}

function delve(userConfig) {
  const config = makeDefaultConfig(userConfig);
  start(config);
}

export default delve;
