/**
 * Generates initials from a name, using the first letter of each word.
 *
 * @param name - The full name to extract initials from.
 * @param maxLength - Maximum number of initials to return. Defaults to 2.
 * @returns The uppercase initials, e.g. "John Doe" -> "JD".
 *
 * @example
 * ```ts
 * generateInitials("John Doe");           // "JD"
 * generateInitials("John Michael Doe", 3); // "JMD"
 * generateInitials("Cher");               // "C"
 * ```
 */
export function generateInitials(name: string, maxLength = 2): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return words
    .slice(0, maxLength)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}
