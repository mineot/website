/**
 * Detects the user's preferred language.
 * 
 * @returns The user's preferred language.
 */
export function detectLanguage(): string {
  // Get the user's preferred language from the browser's supported languages
  const language = navigator.languages?.[0] || navigator.language || '';

  // Return the user's preferred language
  return language;
}
