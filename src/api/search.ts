import { getItem, setItem } from "../modules/cache";

const CACHE_INDEX = "search";
const SEARCH_URL = "http:/localhost:8080/search";

export type SearchResponse = { query: string; results: Array<string> };
export const search = async (query: string): Promise<SearchResponse> => {
  const resultFromCache = getItem(CACHE_INDEX, query);
  if (resultFromCache) return resultFromCache;

  const url = new URL(SEARCH_URL);
  url.searchParams.set("query", query);

  const res = await fetch(url);
  if (res.status === 200) {
    const resJson = await res.json();
    setItem(CACHE_INDEX, query, resJson.data);
    return resJson.data as SearchResponse;
  }

  return {
    query,
    results: [],
  };
};
