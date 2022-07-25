import { distance, closest } from 'fastest-levenshtein';
import { assertString, assertRange, assertNumber } from './helpers/validate';

const exclusions = [' Inc.', ', Inc.', 'The ', '.com'];

/**
 * Exclude words from matching score. See exclusions above.
 */
function excludeWords(input: string): string {
  let output = input;
  exclusions.forEach((exclusion) => {
    const regex = new RegExp(exclusion, 'gi');
    output = output.replace(regex, '');
  });
  return output;
}

/**
 * Fuzzy String Matching
 *
 * @param {value,column,threshold} input The value to fuzzy match
 * @return The matched value
 * @customfunction
 */
export function ZLOOKUP(
  value: string,
  column: string[][],
  threshold: number,
): string {
  assertString(value);
  assertRange(column);
  assertNumber(threshold, 'threshold');

  const searchValues = column.flat();
  const closestString = closest(value, searchValues);
  return closestString;
}

/**
 * Get the string distance (Levenshtein distance)
 *
 * @param {a,b} input The string values to compare
 * @return The string distance
 * @customfunction
 */
export function LEVENSHTEIN(a: string, b: string): number {
  assertString(a);
  assertString(b);

  const stringDistance = distance(a, b);
  return stringDistance;
}
