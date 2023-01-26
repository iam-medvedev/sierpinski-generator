import type { CreateOptions } from './types';

/**
 * Options validator
 */
export function validateOptions(options: CreateOptions) {
  if (typeof options !== 'object') {
    throw new Error('[createSierpinskiTriangle] Please provide `options`');
  }

  if (typeof options.depth !== 'number') {
    throw new Error('[createSierpinskiTriangle] Please provide `depth`');
  }

  if (typeof options.size !== 'number') {
    throw new Error('[createSierpinskiTriangle] Please provide `size`');
  }
}
