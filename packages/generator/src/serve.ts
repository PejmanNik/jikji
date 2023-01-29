import http from "http";
import { AddressInfo } from "node:net";
import handler from "serve-handler";
import { readdir } from 'fs/promises'

export interface ReportServer {
  server: http.Server;
  close: () => void;
  getHost: () => string;
}



/**
 * Start an HTTP server for react report project,
 * You must close the server by calling `close` from the return object.
 * @param dir - absolute path to the react report project build folder 
 * @param port - optional port number for HTTP server
 * @returns - the HTTP server and helper functions
 */
export async function startServer(dir: string, port?: number): Promise<ReportServer> {

  const staticDirectories = (await readdir(dir, { withFileTypes: true }))
    .filter(x => x.isDirectory())
    .map(x => ({ "source": x.name, "destination": `/${x.name}` }))

  const server = http.createServer(async (req, res) => {
    await handler(req, res, {
      public: dir,
      rewrites: [
        ...staticDirectories,
        { "source": "**", "destination": "/index.html" },
      ]
    });
  });

  server.listen(port);
  const address = server.address() as AddressInfo;

  return {
    server,
    close: () => server.close(),
    getHost: () => `http://localhost:${address.port}`,
  };
}
