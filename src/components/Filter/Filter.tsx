import { FilterProps } from "../../types/filter";

function Filter({ filterText, onFilterChange }: FilterProps) {
  return (
    <input
      type="text"
      placeholder="Filter resources by title or tags..."
      value={filterText}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default Filter;
