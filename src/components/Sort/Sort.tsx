import { SortProps } from "../../types/sort";
import styles from "./Sort.module.css";

function Sort({ sortBy, onSortChange }: SortProps) {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <select
      value={sortBy}
      onChange={handleSortChange}
      className={styles.sortDropdown}
    >
      <option value="">Sort by</option>
      <option value="category">Category</option>
      <option value="date">Date</option>
    </select>
  );
}

export default Sort;
