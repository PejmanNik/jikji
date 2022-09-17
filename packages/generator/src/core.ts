import { Page, PooledPage } from "page";

export interface NewPageFactory {
  newPage(): Promise<Page> | Promise<PooledPage>;
}

// this function accepts multiple print funcs in order to 
//apply multiple print like pdf and image on the same 
// tab for further implementation
export async function printPage(
  browser: NewPageFactory,
  reportUrl: URL,
  jsonData: string | undefined,
  printFuncs: Array<(page: Page) => Promise<void>>
): Promise<void> {
  const page = await browser.newPage();

  //TODO: read __jikji from react lib
  try {
    await page.exposeFunction("__jikji_readJsonDataFile", () => {
      return jsonData;
    });

    page.goto(reportUrl.toString());
    await page.waitForFunction("window.__jikji_isReady === true");

    for (const func of printFuncs) {
      await func(page);
    }

  } finally {
    if ("release" in page) {
      page.release();
    } else {
      page.close();
    }
  }
}
