import * as path from "path";
import { fileURLToPath } from "url";
import { rm } from "fs/promises";
import { Extractor, ExtractorConfig } from "@microsoft/api-extractor";
import { exec } from "child-process-promise";

export const buildTsc = async (url) => {
  const startTime = performance.now();
  await exec("tsc");
  const tsFinishTime = performance.now();
  console.log(
    `\x1b[32mTS Done in ${Math.round(tsFinishTime - startTime)}ms \x1b[0m`
  );

  const dirname = path.dirname(fileURLToPath(url));
  const apiExtractorJsonPath = path.join(dirname, "api-extractor.jsonc");

  // Load and parse the api-extractor.json file
  const extractorConfig =
    ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

  // Invoke API Extractor
  const extractorResult = Extractor.invoke(extractorConfig, {
    // Equivalent to the "--local" command-line parameter
    localBuild: process.env.NODE_ENV === "development",
  });

  const apiFinishTime = performance.now();

  await rm(path.join(dirname, "..", "lib", "dec"), {
    recursive: true,
    force: true,
  });

  if (extractorResult.succeeded) {
    console.log(
      `\x1b[32mAPI Extractor Done in ${Math.round(
        apiFinishTime - tsFinishTime
      )}ms \x1b[0m`
    );
    process.exitCode = 0;
  } else {
    console.error(
      `API Extractor completed with ${extractorResult.errorCount} errors` +
        ` and ${extractorResult.warningCount} warnings`
    );
    process.exitCode = 1;
  }
};
