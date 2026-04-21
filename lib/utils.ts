import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Canonical class-name merger. Used by every component. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between min and max. */
export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
