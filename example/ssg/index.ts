import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from 'url';
import { ReportBuilder } from "@jikji/generator";

async function build() {

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });

    const dirname = path.dirname(fileURLToPath(import.meta.url));

    try {
        await ReportBuilder.browser(browser)
            .serve(path.join(dirname, "../dist"))
            .report("annual-report")
            .pdf({
                path: './ssg/out.pdf'
            })
            .build();
    }
    finally {
        await browser.close();
    }
}

build();