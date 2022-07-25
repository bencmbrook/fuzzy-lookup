import { ZLOOKUP, LEVENSHTEIN } from './main';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

/**
 * Fuzzy String Matching
 *
 * @param {value,column,threshold} input The value to fuzzy match
 * @return The matched value
 * @customfunction
 */
global.ZLOOKUP = ZLOOKUP;

/**
 * Get the string distance (Levenshtein distance)
 *
 * @param {a,b} input The string values to compare
 * @return The string distance
 * @customfunction
 */
global.LEVENSHTEIN = LEVENSHTEIN;
