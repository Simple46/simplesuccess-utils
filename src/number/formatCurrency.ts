/**
 * Formats a number as a currency string.
 *
 * @param value - The numeric amount to format.
 * @param currency - The ISO 4217 currency code. Defaults to "USD".
 * @param locale - The locale to format for. Defaults to "en-US".
 * @returns A formatted currency string.
 *
 * @example
 * ```ts
 * formatCurrency(1234.5);                     // "$1,234.50"
 * formatCurrency(1234.5, "NGN", "en-NG");      // "₦1,234.50"
 * ```
 */
export function formatCurrency(
  value: number,
  currency = "USD",
  locale = "en-US",
): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value,
  );
}
