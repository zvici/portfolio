/**
 * Returns a greeting message based on the current hour.
 *
 * Time ranges:
 * - 05:00 – 11:59 → "Good morning!"
 * - 12:00 – 17:59 → "Good afternoon!"
 * - 18:00 – 20:59 → "Good evening!"
 * - 21:00 – 04:59 → "Good night!"
 *
 * @returns A greeting message based on the current time of day.
 */
export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good morning!";
  if (hour >= 12 && hour < 18) return "Good afternoon!";
  if (hour >= 18 && hour < 21) return "Good evening!";
  return "Good night!";
}
