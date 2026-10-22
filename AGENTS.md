# Repository guidance

## Project

Build a polished, responsive personal portfolio website. The repository is currently a blank slate; inspect its structure and existing decisions before choosing or introducing a framework, dependencies, or build tools.

## Site content and navigation

Provide clear, consistent navigation to these four destinations:

- **Welcome** — a concise introduction and friendly greeting, with clear paths into the rest of the portfolio.
- **About me** — background, interests, skills, and a personal introduction.
- **Achievements** — a scannable list of personal achievements, with dates or context where available.
- **Projects** — projects visitors can explore, with useful descriptions and working links when supplied.

Use real, maintainable page structure and accessible links. Do not invent personal history, credentials, project details, or external URLs; use clearly labeled placeholders when content has not been provided. Make the current page and navigation understandable to keyboard and screen-reader users.

## Visual direction

- Use a calm tan-and-blue palette inspired by the muted, atmospheric feel of Wave of Kanagawa. Treat it as a mood reference, not a request to reproduce its artwork or interface.
- Suggested starting colors: warm paper/sand `#E8DCC5`, deeper tan `#C6AE89`, ink navy `#22364A`, muted ocean blue `#52758A`, and a dark readable text color `#26313A`. Adjust shades as needed to maintain strong text contrast.
- Keep the overall result warm, composed, and professional. Use blue for navigation, links, and selective emphasis; reserve tan and off-white for backgrounds and surfaces. Avoid overly saturated accents, clutter, and decorative effects that compete with content.
- Choose legible, professional type. Prefer a restrained pairing such as **Inter** (or a system sans-serif fallback) for body and interface text with **Source Serif 4** (or a Georgia fallback) for prominent headings. Load remote fonts only when the project already supports it or the implementation has a clear fallback.
- Use a consistent spacing scale, readable line lengths, clear heading hierarchy, and responsive layouts that work on narrow screens as well as desktop.
- Use imagery only when it supports the portfolio and has a valid source. Provide useful alternative text for meaningful images and empty alternative text for decorative images.

## Implementation practices

- Follow the repository's existing stack and conventions once established; keep components and styles easy to understand and maintain.
- Build semantic, accessible HTML: landmarks, ordered headings, visible keyboard focus, labels for controls, and sufficient color contrast.
- Ensure all four pages or sections are reachable through the site's navigation and that links and controls have clear names.
- Avoid adding dependencies or elaborate architecture for simple presentation needs.
- Do not add fabricated copy or placeholder links that appear functional. Make unfinished content visibly identifiable for later replacement.

## Verification

- When a build or preview workflow exists, use the repository's documented commands and check the affected pages at desktop and mobile widths.
- Check navigation, keyboard focus, text contrast, and that supplied links resolve to their intended destinations.
- Do not claim a build or check passed unless it was actually run.

## Assignment scope

- The portfolio must remain a static site that opens by double-clicking `index.html`.
- The required destinations are Home, About Me, Projects, Skills, and Contact.
- Keep all five destinations reachable from the navigation on every page.
- Do not add a backend, framework, build tool, package manager, API key, password, token, or login system.
- Do not invent personal history, credentials, project details, contact information, or external URLs. Use clearly labeled placeholders until the user supplies real content.

## Git workflow

- Use Git for all project changes.
- Work in small, focused tasks. Each completed task should produce one atomic commit.
- Before editing, inspect `git status` and preserve unrelated user changes.
- Review the complete diff before committing.
- Use clear, concise commit messages in the imperative mood, such as `Add responsive site navigation` or `Fix mobile layout overflow`.
- Commit after each completed task.
- Do not commit unfinished, unrelated, generated, temporary, or local-only files.
- Never commit passwords, API keys, tokens, private contact details, or other secrets.
- Never use `git reset --hard`, force-push, or rewrite published history.
- To undo a change, create a new reverting commit instead of rewriting history.
- Push completed commits to the `main` branch only after the user reviews and approves the push.
- Before pushing, verify the affected site behavior locally and confirm that relative paths work from the GitHub Pages repository path.
- Treat GitHub Pages as a public deployment. Verify that links, images, and assets are suitable for a public repository.
- Keep the commit history meaningful and steady throughout development; do not squash the project into one final commit.
