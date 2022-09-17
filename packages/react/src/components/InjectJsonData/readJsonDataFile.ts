import log from 'core/log';

export default async function readJsonDataFile(
  defaultValue?: unknown,
): Promise<unknown> {
  const readFunc = window.__jikji_readJsonDataFile;

  if (readFunc) {
    // read file with expose function feature of puppeteer
    const data = await readFunc();
    return JSON.parse(data);
  } else if (defaultValue) {
    log.warn('using default value for inject json data file.');
    return defaultValue;
  }

  throw new Error(
    'inject json file can only be used in SSG mode, please check the docs.',
  );
}
