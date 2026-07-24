# @simplesuccess/utils

A modern, fully-typed TypeScript utility library — think lodash, date-fns, and a handful of other helper libraries, combined into one lightweight package built for TypeScript developers.

[![npm version](https://img.shields.io/npm/v/@simplesuccess/utils.svg)](https://www.npmjs.com/package/@simplesuccess/utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![CI](https://github.com/Simple46/simplesuccess-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/Simple46/simplesuccess-utils/actions/workflows/ci.yml)

## Why

Every project ends up with the same helper functions rewritten from scratch — `capitalize`, `debounce`, `groupBy`, `deepClone`. This package collects the ones you actually reach for, fully typed, tested, and documented, so you can just:

```ts
import { capitalize, debounce, groupBy } from "@simplesuccess/utils";
```

## Install

```bash
npm install @simplesuccess/utils
```

## Quick Start

```ts
import { capitalize, groupBy, debounce, isEmail } from "@simplesuccess/utils";

capitalize("hello world"); // "Hello world"

groupBy([1, 2, 3, 4], (n) => (n % 2 === 0 ? "even" : "odd"));
// { odd: [1, 3], even: [2, 4] }

const search = debounce((q: string) => console.log(q), 300);

isEmail("me@example.com"); // true
```

## Features

- 🔒 **Fully typed** — written in TypeScript, ships with complete `.d.ts` declarations
- 📦 **Dual module support** — works with both ESM (`import`) and CommonJS (`require`)
- 🧪 **Fully tested** — every function has a dedicated test suite
- 📖 **Documented** — every function includes JSDoc with parameters, return values, and usage examples, visible right in your editor on hover
- 🪶 **Lightweight** — zero dependencies

## Modules

| Module                                   | Functions | Description                                    |
| ---------------------------------------- | --------- | ---------------------------------------------- |
| [String](#string)                        | 10        | Case conversion, truncation, slugs, and more   |
| [Array](#array)                          | 10        | Grouping, sorting, chunking, deduplication     |
| [Object](#object)                        | 10        | Deep clone/merge, pick/omit, nested get/set    |
| [Number & Date](#number--date)           | 10        | Rounding, formatting, date math, relative time |
| [Async & Validation](#async--validation) | 10        | Debounce/throttle/retry, format validation     |

---

### String

| Function                             | Description                                |
| ------------------------------------ | ------------------------------------------ |
| `capitalize(text)`                   | Capitalizes the first letter of a string   |
| `slugify(text)`                      | Converts a string to a URL-friendly slug   |
| `truncate(text, maxLength, suffix?)` | Truncates a string with an optional suffix |
| `camelCase(text)`                    | Converts a string to camelCase             |
| `snakeCase(text)`                    | Converts a string to snake_case            |
| `kebabCase(text)`                    | Converts a string to kebab-case            |
| `titleCase(text)`                    | Converts a string to Title Case            |
| `reverse(text)`                      | Reverses the characters of a string        |
| `removeWhitespace(text)`             | Removes all whitespace from a string       |
| `generateInitials(name, maxLength?)` | Generates initials from a name             |

### Array

| Function                          | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| `unique(array)`                   | Removes duplicate values                       |
| `shuffle(array)`                  | Returns a randomly shuffled copy               |
| `chunk(array, size)`              | Splits an array into chunks                    |
| `groupBy(array, getKey)`          | Groups elements by a key function              |
| `sortBy(array, getValue)`         | Sorts by a computed value                      |
| `flatten(array, depth?)`          | Flattens a nested array                        |
| `difference(array, exclude)`      | Elements in the first array but not the second |
| `intersection(array, other)`      | Elements present in both arrays                |
| `move(array, fromIndex, toIndex)` | Moves an element to a new index                |
| `sample(array)`                   | Returns a random element                       |

### Object

| Function                        | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `deepClone(value)`              | Creates a deep copy of an object or array      |
| `pick(obj, keys)`               | Creates an object with only the specified keys |
| `omit(obj, keys)`               | Creates an object excluding the specified keys |
| `merge(target, source)`         | Shallow merges two objects                     |
| `deepMerge(target, source)`     | Recursively merges nested objects              |
| `freeze(obj)`                   | Deeply freezes an object                       |
| `hasKey(obj, key)`              | Checks for an own property                     |
| `get(obj, path, defaultValue?)` | Safely reads a nested value by dot path        |
| `set(obj, path, value)`         | Sets a nested value by dot path                |
| `isEqual(a, b)`                 | Deep equality check                            |

### Number & Date

| Function                                    | Description                           |
| ------------------------------------------- | ------------------------------------- |
| `clamp(value, min, max)`                    | Restricts a number to a range         |
| `round(value, decimals?)`                   | Rounds to a number of decimal places  |
| `sum(numbers)`                              | Sums an array of numbers              |
| `average(numbers)`                          | Calculates the mean of an array       |
| `formatCurrency(value, currency?, locale?)` | Formats a number as currency          |
| `formatDate(date, locale?)`                 | Formats a Date into a readable string |
| `isToday(date)`                             | Checks if a date is today             |
| `daysBetween(start, end)`                   | Days between two dates                |
| `addDays(date, days)`                       | Adds/subtracts days from a date       |
| `timeAgo(date)`                             | Human-readable relative time          |

### Async & Validation

| Function                         | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| `sleep(ms)`                      | Pauses execution for a duration                    |
| `retry(fn, attempts?, delayMs?)` | Retries an async function on failure               |
| `timeout(promise, ms)`           | Rejects a promise if it takes too long             |
| `debounce(fn, waitMs)`           | Delays invoking a function until calls stop        |
| `throttle(fn, waitMs)`           | Limits a function to run at most once per interval |
| `isEmail(value)`                 | Validates email format                             |
| `isURL(value)`                   | Validates URL format                               |
| `isUUID(value)`                  | Validates UUID format                              |
| `isEmpty(value)`                 | Checks if a value is empty                         |
| `isHexColor(value)`              | Validates hex color format                         |

## Documentation

Every function ships with full JSDoc — hover any import in VS Code to see its description, parameters, return type, and usage examples without leaving your editor.

## Contributing

Contributions are welcome. Please:

1. Fork the repo and create a feature branch
2. Add your function with full JSDoc (description, `@param`, `@returns`, `@example`)
3. Include tests covering the happy path, empty/falsy input, and at least one edge case
4. Run `npm run test` and `npm run lint` before opening a PR

## License

MIT © [Hissa](https://hissa-dev.vercel.app/)
