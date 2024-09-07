import has from 'lodash/has';

export const env = (key: string, defaultValue?: unknown) =>
  has(import.meta.env, key) ? import.meta.env[key] : defaultValue;
