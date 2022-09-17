// Con not import page from puppeteer-core directly 
// https://github.com/puppeteer/puppeteer/issues/6904
//
// import type { Page as PuppeteerPage } from "puppeteer-core";
// export type Page = Pick<PuppeteerPage, 'pdf' | 'exposeFunction' | 'waitForFunction' | 'goto' | 'close'>;

import { PDFOptions } from "puppeteer-core";

export interface Page {
    pdf(options?: PDFOptions): Promise<Buffer>;
    goto(url: string): Promise<unknown>;
    close(): Promise<void>;
    exposeFunction(name: string, pptrFunction: Function | {
        default: Function;
    }): Promise<void>;
    waitForFunction(pageFunction: string): Promise<unknown>;
}

export interface PooledPage extends Page {
    release: () => void;
}