export const __jikji_isReady = "__jikji_isReady";
export const __jikji_readJsonDataFile = "__jikji_readJsonDataFile";

declare global {
  interface Window {
    [__jikji_isReady]?: boolean;
    [__jikji_readJsonDataFile]?: () => Promise<string>;
  }
}

