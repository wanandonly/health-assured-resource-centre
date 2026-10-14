import { Fragment, useState } from "react";
import ResourcesData from "./config/resources.json";
import Card from "./components/Card/Card";
import Sort from "./components/Sort/Sort";
import { sortByCategory, sortByDate } from "./utils/sort";

function App() {
  const [sortOption, setSortOption] = useState("");
  const resources = [...ResourcesData].sort((a, b) => {
    if (sortOption === "category") {
      return sortByCategory([a, b])[0] === a ? -1 : 1;
    } else if (sortOption === "date") {
      return sortByDate([a, b])[0] === a ? -1 : 1;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <h1>Health Assured Resource Centre</h1>
      {/* Render the Sort component with initial category value with onSortChange function */}
      <Sort
        sortBy={sortOption}
        onSortChange={(value) => setSortOption(value)}
      />
      {resources.map((resource) => (
        <Fragment key={resource.category}>
          <h2>{resource.category}</h2>
          <Card key={resource.id} {...resource} />
        </Fragment>
      ))}
    </div>
  );
}

export default App;
