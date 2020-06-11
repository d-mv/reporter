function capitalize(word: string): string {
  if (typeof word !== 'string') return '';

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export { capitalize };
