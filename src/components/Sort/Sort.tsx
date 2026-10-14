import { SortProps } from "../../types/sort";

function Sort({ sortBy, onSortChange }: SortProps) {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <select value={sortBy} onChange={handleSortChange}>
      <option value="">Sort by</option>
      <option value="category">Category</option>
      <option value="date">Date</option>
    </select>
  );
}

export default Sort;
