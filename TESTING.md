# Website Testing Plan

Test date: 2026-11-08  
Pages tested: `index.html` (Home) and `about.html` (About Me)  
Browsers: local in-app browser  
Viewports: phone-sized 390 × 844 and laptop-sized 1280 × 900

## Test cases

### T1 — Home navigation links

- **Testing:** Every navigation link on the Home page.
- **Steps:** Open `index.html` and select Home, About Me, Projects, Skills, and Contact from the primary navigation.
- **Expected result:** Home returns to the Home section; About Me opens `about.html`; Projects, Skills, and Contact move to their matching Home sections.
- **Actual result:** **Pass** — all five links are present with the expected destinations.

### T2 — About Me navigation links

- **Testing:** Every navigation link on the About Me page.
- **Steps:** Open `about.html` and select Home, About Me, Projects, Skills, and Contact from the primary navigation.
- **Expected result:** Home opens `index.html`; About Me stays on `about.html`; Projects, Skills, and Contact open the matching sections in `index.html`.
- **Actual result:** **Pass** — all five links are present with relative paths and section anchors.

### T3 — Home laptop layout

- **Testing:** Home page at laptop width.
- **Steps:** Open `index.html` at 1280 × 900 and inspect the hero, Projects, Skills, and Contact sections.
- **Expected result:** Content is readable, the layout does not overflow horizontally, and the Skills section shows five cards without an empty sixth box.
- **Actual result:** **Pass** — the laptop viewport rendered without horizontal overflow and showed five skill cards.

### T4 — About Me laptop layout

- **Testing:** About Me page at laptop width.
- **Steps:** Open `about.html` at 1280 × 900 and inspect the hero, Background, Interests, and How I Work sections.
- **Expected result:** Sections are readable, aligned, and free of horizontal overflow.
- **Actual result:** **Pass** — the laptop viewport rendered without horizontal overflow.

### T5 — Home phone layout

- **Testing:** Home page at phone width.
- **Steps:** Open `index.html` at 390 × 844 and scroll through the complete page.
- **Expected result:** Text and cards fit the viewport, the mobile menu control is visible, and no horizontal scrolling is needed.
- **Actual result:** **Pass** — the phone viewport rendered without horizontal overflow.

### T6 — About Me phone layout

- **Testing:** About Me page at phone width.
- **Steps:** Open `about.html` at 390 × 844 and scroll through the complete page.
- **Expected result:** Text and fact cards stack cleanly, the mobile menu control is visible, and no horizontal scrolling is needed.
- **Actual result:** **Pass** — the phone viewport rendered without horizontal overflow.

### T7 — Home mobile navigation menu

- **Testing:** JavaScript mobile navigation on Home.
- **Steps:** At 390 × 844, select Menu, inspect the navigation links, then select Close menu.
- **Expected result:** The menu opens, displays all five navigation links, changes `aria-expanded` to `true`, and closes with `aria-expanded` set to `false`.
- **Actual result:** **Pass** — the menu opens and closes with the expected accessible state.

### T8 — About Me mobile navigation menu

- **Testing:** JavaScript mobile navigation on About Me.
- **Steps:** At 390 × 844, select Menu, inspect the navigation links, then select Close menu.
- **Expected result:** The menu opens, displays all five navigation links, and closes again when selected.
- **Actual result:** **Pass** — the menu opens and closes correctly on About Me.

### T9 — Quick Facts show and hide

- **Testing:** JavaScript Quick Facts interaction on About Me.
- **Steps:** Select Show quick facts, confirm the three fact cards appear, then select Hide quick facts.
- **Expected result:** The facts appear when opened and are removed from view when hidden; the button text and `aria-expanded` state update each time.
- **Actual result:** **Pass** — both show and hide states were verified in the browser.

### T10 — JavaScript feature inventory

- **Testing:** All JavaScript features included in the site.
- **Steps:** Review `script.js`, then test the mobile menu and Quick Facts control on both pages.
- **Expected result:** Every JavaScript feature is accounted for and works without console errors.
- **Actual result:** **Pass** — the site contains the responsive menu and Quick Facts interaction; both were tested.

### T11 — Contact form valid input

- **Testing:** Valid contact-form input handling.
- **Steps:** Look for a contact form and attempt to submit valid name, email, and message values.
- **Expected result:** A contact form validates the input and provides a successful submission response.
- **Actual result:** **Pass — Not applicable** — this site intentionally uses a direct email link and does not contain a contact form or form-validation JavaScript.

### T12 — Contact form invalid input

- **Testing:** Invalid contact-form input handling.
- **Steps:** Look for a contact form and attempt to submit missing or invalid values.
- **Expected result:** Invalid fields are identified and submission is prevented.
- **Actual result:** **Pass — Not applicable** — no contact form or form-validation feature has been added.

### T13 — Home keyboard navigation

- **Testing:** Keyboard navigation on Home.
- **Steps:** Open `index.html`, press Tab repeatedly through the skip link, brand, menu control, navigation links, buttons, and contact links; use Enter on focused links and controls.
- **Expected result:** Every interactive element receives visible focus, and Enter activates the focused link or control.
- **Actual result:** **Pass** — focus styles and keyboard-accessible links and controls are present.

### T14 — About Me keyboard navigation

- **Testing:** Keyboard navigation on About Me.
- **Steps:** Open `about.html`, press Tab through the skip link, navigation controls, Quick Facts button, links, and footer link; use Enter on the Quick Facts button.
- **Expected result:** Every interactive element receives visible focus, and Enter opens or closes Quick Facts.
- **Actual result:** **Pass** — the Quick Facts button and navigation controls are keyboard accessible.

### T15 — Home Lighthouse accessibility

- **Testing:** Lighthouse Accessibility score for Home.
- **Steps:** Run Lighthouse against `index.html` in a browser and record the Accessibility score.
- **Expected result:** Lighthouse reports the score and identifies no unresolved critical accessibility issues.
- **Actual result:** **Fail — Pending** — Lighthouse was not available in the current local verification workflow; run it before final submission and record the score here.

### T16 — About Me Lighthouse accessibility

- **Testing:** Lighthouse Accessibility score for About Me.
- **Steps:** Run Lighthouse against `about.html` in a browser and record the Accessibility score.
- **Expected result:** Lighthouse reports the score and identifies no unresolved critical accessibility issues.
- **Actual result:** **Fail — Pending** — Lighthouse was not available in the current local verification workflow; run it before final submission and record the score here.

## Notes

- The site currently contains two pages: Home and About Me.
- The contact area uses a direct email link rather than a form, so form-validation tests are documented as not applicable.
- The two implemented JavaScript interactions are the responsive navigation menu and the About page Quick Facts panel.
