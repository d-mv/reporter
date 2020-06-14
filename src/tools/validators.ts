import { not, is, forEach } from 'ramda';

function validateArray(data: unknown[], type: string): boolean {
  if (!data || not(is(Array, data))) return false;

  let result = true;

  const forEachFn = (el: unknown): void => {
    if (typeof el !== type) result = false;
  };

  forEach(forEachFn, data);

  return result;
}

export { validateArray };
