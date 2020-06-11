function makeDateTime(date: string): string {
  return new Date(date).toLocaleDateString('US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}

export { makeDateTime };
