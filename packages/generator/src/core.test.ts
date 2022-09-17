import { printPage } from "./core";
import { Page, PooledPage } from "page";

const printFuncs = [jest.fn()];

test("call print page with normal browser", async () => {
  const jsonData = "";
  const url = new URL("http://localhost:3000");

  const page = {
    exposeFunction: jest.fn(),
    waitForFunction: jest.fn(),
    goto: jest.fn(),
    close: jest.fn(),
  } as unknown as Page;

  const mockedBrowser = {
    newPage: jest.fn().mockImplementation(async () => page),
  };

  await printPage(mockedBrowser, url, jsonData, printFuncs);

  expect(printFuncs[0]).toHaveBeenCalledWith(page);
  expect(mockedBrowser.newPage).toHaveBeenCalled();
  expect(page.exposeFunction).toHaveBeenCalled();
  expect(page.waitForFunction).toHaveBeenCalled();
  expect(page.goto).toHaveBeenCalledWith(url.toString());
  expect(page.close).toHaveBeenCalled();
});

test("call print page with pooled page supported browser", async () => {
  const jsonData = "";
  const url = new URL("http://localhost:3000");

  const page = {
    exposeFunction: jest.fn(),
    waitForFunction: jest.fn(),
    goto: jest.fn(),
    close: jest.fn(),
    release: jest.fn(),
  } as unknown as PooledPage;

  const mockedBrowser = {
    newPage: jest.fn().mockImplementation(async () => page),
  };

  await printPage(mockedBrowser, url, jsonData, printFuncs);

  expect(mockedBrowser.newPage).toBeCalled();
  expect(page.close).toHaveBeenCalledTimes(0);
  expect(page.release).toHaveBeenCalled();
});
