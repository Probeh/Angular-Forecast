export const decodeBase64 = (value: string): string => atob(value);
export const encodeBase64 = (value: string): string => btoa(value);
export const camelCase = (original: string): string =>
  original[0].toLowerCase() + (original.substring(1).length <= 3
    ? original.substring(1)
      .toLowerCase()
    : original.substring(1));
export const titleCase = (original: string): string => original.includes(' ')
  ? original.split(' ')
    .map(item => item[0].toUpperCase() + item.substring(1))
    .join(' ')
  : original[0].toUpperCase() + original.substring(1);