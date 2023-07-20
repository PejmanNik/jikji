export const jikji_isReady = "__jikji_isReady";
export const jikji_readJsonDataFile = "__jikji_readJsonDataFile";

declare global {
    interface Window {
        [jikji_isReady]?: boolean;
        [jikji_readJsonDataFile]?: () => Promise<string>;
    }
}