import { startServer } from "./serve";
import http, { Server } from "http";
import handler from "serve-handler";

jest.mock("http");
jest.mock("serve-handler");

const mockedHttp = jest.mocked(http, true);
const mockedServeStatic = jest.mocked(handler, true);
const mockedListen = jest.fn();

mockedHttp.createServer.mockImplementation(
  () =>
    ({
      listen: mockedListen,
      address: () => ({ address: "http://localhost", port: "3000" }),
    } as unknown as Server)
);

test("start server with custom port", async () => {
  const dir = "./root";
  const port = 3000;
  const result = startServer(dir, port);

  expect(result.getHost()).toBe("http://localhost:3000");
  expect(mockedServeStatic).toHaveBeenCalledWith(dir);
  expect(mockedListen).toHaveBeenCalledWith(port);
});
