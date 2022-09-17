---
sidebar_position: 1
---

# Image

This component uses [useLayoutSuspension](use-layout-suspension) hook to provide a reliable way to load images in the reports. It will accept all standard properties of the HTML `img` element. So you can easily replace it with the build-in image component.

In a nutshell, it will suspend the layout engine until the image load completely, so the pagination and layouting will be applied considering the image dimensions and position. for more information you can check [useLayoutSuspension](use-layout-suspension).
