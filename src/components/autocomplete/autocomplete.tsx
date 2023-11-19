import styles from "./autocomplete.module.css";
import { search } from "../../api/search";
import type { SearchResponse } from "../../api/search";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import { AutocompleteList } from "./autocomplete-list";

function Autocomplete() {
  const [results, setResults] = useState<SearchResponse["results"]>([]);

  const handleSubmit = async (query?: string) => {
    if (!query) {
      setResults([]);
      return;
    }

    const response = await search(query);
    setResults(response.results);
  };
  const debounceSubmit = useCallback(debounce(handleSubmit, 1000), []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    debounceSubmit(e.target.value);
  };

  return (
    <div className={styles.autocomplete__container}>
      <input
        className={styles.autocomplete__input}
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
      {results.length > 0 && <AutocompleteList results={results} />}
    </div>
  );
}

export default Autocomplete;
