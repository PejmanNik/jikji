---
sidebar_position: 10
title: CSR vs SSG
---

# Client Side Rendering VS Server Side Generation

## Client Side Rendering

This library is used as part of your web application in this mode. You can use [ReportView](./components/report/report-view.md) component to provide a similar styling to Chrome's print preview style for user.The layout engine splits and paginates your content during the rendering and will show print-ready content to the user. It can easily be converted to PDF by browser.

In the CSR mode, everything will happen in the client browser, Currently, there is no way to output a PDF file directly, and it is up to the browser and the user to choose the *Save To PDF* option in the browser.

## Server Side Generation

In this mode, you need two separate projects that are hosted on a server. The first project is a React application that contains your reports. You can skip the [ReportView](./components/report/report-view.md) component as there will be no preview. You can use [BrowserRouter](./components/router/browser-router.md) to organize reports, and the [Inject Json Data](./inject-json-data.md) component to send data as JSON to React components directly. Then you need to build the project to a static HTML + CSS + Js file.

The second project as a server application, uses the [Generator](generator) library and needs access to the react static output files (first project) to render the report (directly or served version) and convert it to PDF, Image, or HTML file and will you have complete control in this mode over the output files.