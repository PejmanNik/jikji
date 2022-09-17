import type { PDFOptions } from "puppeteer-core";
import { startServer, ReportServer } from "./serve";
import { NewPageFactory, printPage } from "./core";
import { Page } from "./page";

export interface ServerInit {
  serve(dir: string): ReportInit;
  remoteHost(url: string): ReportInit;
}

export interface ReportInit {
  report(path: string): PrintInit;
}

export interface PrintInit {
  jsonData(data: string): PrintInit;
  pdf(options?: PDFOptions): PrintInit & BuildFinalizer;
}

export interface BuildFinalizer {
  build(): Promise<void>;
}

class InvalidArgumentsError extends Error {
  constructor() {
    super("Invalid Argument")
  }
}

export class ReportResult {
  pdf?: Buffer;
}

export class ReportBuilder
  implements ServerInit, ReportInit, PrintInit, BuildFinalizer {

  private readonly browser: NewPageFactory;
  private readonly printFuncs: Array<(page: Page) => Promise<void>> = [];
  private serveDir?: string;
  private remoteHostUrl?: string;
  private reportPath?: string;
  private data?: string;

  public readonly result: Map<string, ReportResult> = new Map();

  private constructor(browser: NewPageFactory) {
    this.browser = browser;
  }

  public static browser(browser: NewPageFactory): ServerInit {
    return new ReportBuilder(browser);
  }

  public serve(dir: string): ReportInit {
    this.serveDir = dir;
    return this;
  }

  public remoteHost(url: string): ReportInit {
    this.remoteHostUrl = url;
    return this;
  }

  public report(path: string): PrintInit {
    this.reportPath = path;
    return this;
  }

  public jsonData(data: string): PrintInit {
    this.data = data;
    return this;
  }

  public pdf(options?: PDFOptions): PrintInit & BuildFinalizer {
    if (!this.reportPath) {
      throw new InvalidArgumentsError;
    }
    const reportPath = this.reportPath;
    
    this.printFuncs.push(async (page) => {
      const pdf = await page.pdf({
        printBackground: true,
        displayHeaderFooter: false,
        preferCSSPageSize: true,
        margin: {
          bottom: '0px',
          left: '0px',
          right: '0px',
          top: '0px',
        }, ...options
      });
      this.result.set(reportPath, { pdf });
    });

    return this;
  }

  public async build() {

    let server: ReportServer | undefined;
    let hostUrl = this.remoteHostUrl

    try {

      if (this.serveDir) {
        server = startServer(this.serveDir);
        hostUrl = server.getHost();
      }

      if (!hostUrl || !this.reportPath) {
        throw new InvalidArgumentsError;
      }

      //TODO: add support for image and html output

      const url = new URL(this.reportPath, hostUrl);
      await printPage(this.browser, url, this.data, this.printFuncs);
    }
    finally {
      server?.close();
    }
  }
}
