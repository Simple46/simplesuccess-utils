# Contributing to @simplesuccess/utils

Thanks for considering a contribution. This project aims to stay small, well-tested, and well-documented — so every addition has to meet the same bar.

## Before You Start

Open an issue first if you're proposing a new function, especially if it's not a small fix. This avoids duplicate work and lets us agree the function belongs in the library before you write it.

A function belongs here if:

- It solves a problem developers commonly rewrite from scratch across projects
- It has zero dependencies
- It fits one of the existing modules (string, array, object, number, date, async, validation)

## Setup

```bash
git clone https://github.com/simplehissa/simplesuccess-utils.git
cd simplesuccess-utils
npm install
```

## Development Workflow

1. Create a branch: `git checkout -b feature/your-function-name`
2. Add your function inside the relevant module folder (e.g. `src/string/yourFunction.ts`)
3. Write full JSDoc — every function requires:
   - A one-sentence description
   - `@param` for every parameter
   - `@returns`
   - At least 2 `@example` entries
   - `@remarks` for edge cases or gotchas, if relevant
   - `@throws` if the function can throw
4. Export it from `src/index.ts`
5. Write a test file (`yourFunction.test.ts`) covering:
   - The happy path
   - Empty/falsy input
   - At least one real edge case
6. Run the full suite before opening a PR:

```bash
npm run lint
npm run test
npm run build
```

## Commit Style

Use conventional commits:

```
feat: add debounce function
fix: correct rounding in round()
docs: update README examples
test: add edge cases for chunk()
```

## Pull Request Checklist

- [ ] Function has full JSDoc (description, `@param`, `@returns`, 2+ `@example`)
- [ ] Tests cover happy path, empty input, and edge cases
- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] `npm run build` completes without errors
- [ ] README table updated if you added a new function

## Code Style

- No external runtime dependencies
- Prefer built-in JS/TS APIs over custom implementations where possible (e.g. `structuredClone` over a hand-rolled deep clone)
- Functions should not mutate their inputs — always return new values
- Keep functions small and focused — one function, one responsibility

## Questions

Open an issue if anything here is unclear, or if you want to propose a function that doesn't obviously fit an existing module.
