// Prefixes the GitHub Pages base path onto /public asset URLs (e.g. images).
// Set NEXT_PUBLIC_BASE_PATH to the base path in the Pages build; empty on
// local/Vercel builds (served at the root).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
