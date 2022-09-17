---
sidebar_position: 11
---

# Avoid Dynamic Height

This library uses two-phase rendering to create a report. The first render (it is not visible to the user) uses to get elements' dimensions and measure layouts; then the layout engine will split the elements based on page sizes and create new components. The second phase will render this new split and paginated components and will add page and section's static parts like header and footer.

<inline-svg width="700px" src="/img/two-phase-rendering.svg" />

During these phase components get mount **->** unmount **->** mount again. Components that uses [usePageInfo](./components/page/use-page-info.md) receive page number and total page only in the second render. Also, some dynamic content like date-time or random content can have different values between two phases; You must consider enough space for such use cases. Components dimensions **MUST NOT** changed during these two phases. Otherwise, your report will contain overlap and a broken layout.
