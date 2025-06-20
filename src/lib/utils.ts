import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A version of `clsx` that uses `twMerge` to combine class strings.
 *
 * This is useful when you need to combine classes from different sources,
 * such as Tailwind classes and custom classes defined in your component.
 *
 * @param inputs - The class strings to combine
 * @returns The combined class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
