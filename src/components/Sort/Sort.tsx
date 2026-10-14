import { SortProps } from "../../types/sort";

function Sort({ sortBy, onSortChange }: SortProps) {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <select value={sortBy} onChange={handleSortChange}>
      <option value="category">Sort by Category</option>
      <option value="date">Sort by Date</option>
    </select>
  );
}

export default Sort;
