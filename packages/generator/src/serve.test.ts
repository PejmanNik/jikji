import { startServer } from "./serve";
import http, { Server } from "http";

jest.mock("http");
jest.mock("serve-handler");

const mockedHttp = jest.mocked(http, { shallow: true });
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
  const result = await startServer(dir, port);

  expect(result.getHost()).toBe("http://localhost:3000");  
  expect(mockedListen).toHaveBeenCalledWith(port);
});
