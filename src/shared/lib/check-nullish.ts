// Reference: https://github.com/denosaurs/typefetch/blob/main/utils/mod.ts

/**
 * A type that represents a value that can be null or undefined.
 */
export type Nullish<T> = T | null | undefined;

/**
 * Checks if the given value is not empty.
 * Considers `null`, `undefined`, empty strings, empty object and empty arrays as empty.
 * For other types, it simply checks if they are not `null` or `undefined`.
 *
 * @template T - The type of the value to check.
 * @param {Nullish<T>} x - The value to check.
 * @returns {boolean} `true` if the value is not empty, `false` otherwise.
 *
 * @example
 * notEmpty(null); // returns false
 * notEmpty(undefined); // returns false
 * notEmpty(""); // returns false
 * notEmpty([]); // returns false
 * notEmpty("hello"); // returns true
 * notEmpty([1, 2, 3]); // returns true
 * notEmpty({}); // returns false
 *
 * @warning This function does not check for arrays with only empty elements.
 */
export function notEmpty<T>(x: Nullish<T>): x is T {
  switch (true) {
    case x === null || x === undefined || Number.isNaN(x):
      return false;
    case Array.isArray(x):
    case typeof x === "string":
      return Boolean((x as string | Array<T>).length);
    case typeof x === "object": // Should already have caught arrays.
      return Boolean(Object.entries(x as object).length);
    default:
      return true;
  }
}

/**
 * Checks if the given value is empty.
 * Considers `null`, `undefined`, empty strings, empty object and empty arrays as empty.
 * For other types, it simply checks if they are not `null` or `undefined`.
 *
 * @template T - The type of the value to check.
 * @param {Nullish<T>} x - The value to check.
 * @returns {boolean} `true` if the value is not empty, `false` otherwise.
 *
 * @example
 * empty(null); // returns true
 * empty(undefined); // returns true
 * empty(""); // returns true
 * empty([]); // returns true
 * empty("hello"); // returns false
 * empty([1, 2, 3]); // returns false
 * empty({}); // returns true
 *
 * @warning This function does not check for arrays with only empty elements.
 */
export function empty<T>(x: Nullish<T>): x is null | undefined {
  switch (true) {
    case x === null || x === undefined || Number.isNaN(x):
      return true;
    case Array.isArray(x):
    case typeof x === "string":
      return !(x as string | Array<T>).length;
    case typeof x === "object": // Should already have caught arrays.
      return !Object.entries(x as object).length;
    default:
      return false;
  }
}
