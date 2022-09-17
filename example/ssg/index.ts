const puppeteer = require("puppeteer");
const path = require("path");
const { ReportBuilder } = require("@jikji/generator");

async function build() {

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });

    try {
        await ReportBuilder.browser(browser)
            .serve(path.join(__dirname, "../build"))
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