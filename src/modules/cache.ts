// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache = new Map<string, Map<any, any>>();

cache.set("search", new Map());

export const getItem = (indexName: string, key: string) => {
  const indexCache = cache.get(indexName);
  if (!indexCache) return null;

  return indexCache.get(key);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setItem = (indexName: string, key: any, value: any) => {
  const indexCache = cache.get(indexName);
  if (!indexCache) return;

  indexCache.set(key, value);
};
