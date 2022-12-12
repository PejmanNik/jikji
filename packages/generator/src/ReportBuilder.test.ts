import { ReportBuilder } from "./ReportBuilder";
import * as serve from "./serve";
import { NewPageFactory, printPage } from "./core";
import { Page } from "puppeteer-core";

jest.mock("./serve");
jest.mock("./core");

const mockedPage = {
  pdf: jest.fn(),
} as unknown as Page;

const mockedPrintPage = jest.mocked(printPage, { shallow: true });
mockedPrintPage.mockImplementationOnce(async (b, url, json, printFuncs) => {
  await printFuncs[0](mockedPage);
});


const mockedCloseServer = jest.fn();
const mockedGetHost = jest.fn().mockReturnValue("http://localhost:3000");
const mockedStartServer = jest.mocked(serve, { shallow: true }).startServer;

mockedStartServer.mockReturnValue({
  close: mockedCloseServer,
  getHost: mockedGetHost,
} as unknown as serve.ReportServer);

const browser = {} as NewPageFactory;

test("use remote server for creating pdf", async () => {
  const options = { path: 'xyz' };

  await ReportBuilder.browser(browser)
    .remoteHost("http://test.com")
    .report("reports/1")
    .pdf(options)
    .build();

  expect(mockedStartServer).toHaveBeenCalledTimes(0);
  expect(printPage).toHaveBeenCalledWith(
    expect.anything(),
    new URL("http://test.com/reports/1"),
    undefined,
    expect.anything()
  );
  expect(mockedPage.pdf).toHaveBeenCalledWith(expect.objectContaining(options));
  expect(mockedCloseServer).toHaveBeenCalledTimes(0);
});

test("use local server for creating pdf", async () => {
  jest.useFakeTimers();
  const options = { path: 'xyz' };

  await ReportBuilder.browser(browser)
    .serve("./root")
    .report("reports/2")
    .pdf(options)
    .build();

  expect(mockedStartServer).toHaveBeenCalledTimes(1);
  expect(mockedStartServer).toHaveBeenCalledWith("./root");
  expect(printPage).toHaveBeenCalledWith(
    expect.anything(),
    new URL("http://localhost:3000/reports/2"),
    undefined,
    expect.anything()
  );
  expect(mockedCloseServer).toHaveBeenCalledTimes(1);
});
