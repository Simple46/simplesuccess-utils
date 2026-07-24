# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [1.0.0] - TBD

### Added

- Initial release with 50 fully-typed, tested, and documented utility functions across 5 modules:
  - **String** (10): `capitalize`, `slugify`, `truncate`, `camelCase`, `snakeCase`, `kebabCase`, `titleCase`, `reverse`, `removeWhitespace`, `generateInitials`
  - **Array** (10): `unique`, `shuffle`, `chunk`, `groupBy`, `sortBy`, `flatten`, `difference`, `intersection`, `move`, `sample`
  - **Object** (10): `deepClone`, `pick`, `omit`, `merge`, `deepMerge`, `freeze`, `hasKey`, `get`, `set`, `isEqual`
  - **Number & Date** (10): `clamp`, `round`, `sum`, `average`, `formatCurrency`, `formatDate`, `isToday`, `daysBetween`, `addDays`, `timeAgo`
  - **Async & Validation** (10): `sleep`, `retry`, `timeout`, `debounce`, `throttle`, `isEmail`, `isURL`, `isUUID`, `isEmpty`, `isHexColor`
- Full JSDoc on every function (descriptions, params, return types, examples, edge case notes)
- Complete test suite (50 test files) covering happy paths, empty/falsy inputs, and edge cases
- Dual CJS/ESM build output with generated TypeScript declarations
