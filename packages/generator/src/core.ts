import { Page, PooledPage } from "page";
import { jikji_isReady, jikji_readJsonDataFile } from '@jikji/shared/window';

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

  try {
    await page.exposeFunction(jikji_readJsonDataFile, () => {
      return jsonData;
    });

    page.goto(reportUrl.toString());
    await page.waitForFunction(`window.${jikji_isReady} === true`);

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
