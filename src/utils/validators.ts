const regex = {
  empty: RegExp(/^$/),
  slug: RegExp(/^[a-z0-9]+(?:[_-][a-z0-9]+)*$/)
}

export function validateLength(text: string, size: number): boolean {
  return text.length <= size;
}

export function isEmpty(text: string): boolean {
  return regex.empty.test(text);
}