export function getDate(date) {
    return new Date(date).toLocaleDateString('en-CA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }