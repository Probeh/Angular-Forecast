export const decodeBase64 = (value: string): string => atob(value);
export const encodeBase64 = (value: string): string => btoa(value);
export const toCamelCase = (original: string): string => original[0].toLowerCase() +
  (original.substring(1).length <= 3 ? original.substring(1).toLowerCase() : original.substring(1));
export const toTitleCase = (original: string): string =>
  original.split(' ')
    .map(item => item[0].toUpperCase() + item.substring(1))
    .join(' ');