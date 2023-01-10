
/**
 * Reduce an array to a single value, but stop at the first non-undefined value.
 *
 * Like `Array.prototype.find`, but allows for mapping the found value to some new value.
 * @example
 * ```ts
 * const list = ["a", "b", "c", "d", "e"];
 * const result = reduceFirst(list, (value) => {
 *  return value === "c" ? `found ${value}` : undefined;
 * });
 * // result === "found c"
 * ```
 */
export default function reduceFirst<T, U>(array: T[], fn: (currentValue: T, index: number, arr: T[]) => U): U | undefined {
  for(let index=0; index < array.length; index+=1) {
    const value = fn(array[index] as T, index, array);
    if(value !== undefined) {
      return value;
    }
  }
  return undefined;
}
