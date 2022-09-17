---
sidebar_position: 2
---

# Generator

In order to create reports in the server (Server Side Generator), you can use this library. It requires direct access to your report react static output files or a URL to served versions of it (this project must use the base package `@jikji/react`). Generator uses [Puppeteer](https://pptr.dev/) to generate report in different format.


In this mode you can use [Router](./components/router/browser-router.md) component to handle multiple reports in one react project and also [Inject Json Data](./inject-json-data.md) can help you to send dynamic data directly to the react components of the report.

Get started by adding the library to your project.

```shell
yarn add @jikji/generator
```

Or

```shell
npm install @jikji/generator
```

Use `ReportBuilder` object from this library, setup your configuration and build your report, The full documentation of options object is available in the [puppeteer](https://pptr.dev/next/api/puppeteer.pdfoptions) doc.

```ts
import ReportBuilder from @jikji/generator;
import puppeteer from "puppeteer";

...

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

try {
    await ReportBuilder.browser(browser)
        .remoteHost("http://my-reports.com")
        .report("reports/1")
        .pdf(options)
        .build();

}
finally
{
    await browser.close();
}
...
```

Or instead of `remoteHost` use `serve` method and provide a path to the root folder that contains your report react build folder. Check the `example/ssg` folder for the complete example.
