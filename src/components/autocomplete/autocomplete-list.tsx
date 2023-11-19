import { memo } from "react";
import styles from "./autocomplete-list.module.css";

interface AutocompleteListProps {
  results: Array<string>;
}
export const AutocompleteList = memo<AutocompleteListProps>(
  function AutocompleteList({ results }) {
    return (
      <ul className={styles.autocomplete__list}>
        {results.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    );
  }
);
