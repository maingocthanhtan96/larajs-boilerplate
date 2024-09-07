const metaEnv = import.meta.env;
export const env = (key: string, defaultValue?: unknown) => (has(metaEnv, key) ? metaEnv[key] : defaultValue);
