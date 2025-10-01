// This file holds ambient type declarations.
declare module "@tailwindcss/typography";
declare module "tailwindcss/plugin";

// Image modules
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

// Global window theme functions used by ThemeContext
interface Window {
	__theme?: string;
	__setPreferredTheme?: (theme: string) => void;
}
