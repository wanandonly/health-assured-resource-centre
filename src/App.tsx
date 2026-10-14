import { Fragment, useState } from "react";
import ResourcesData from "./config/resources.json";
import Card from "./components/Card/Card";
import Sort from "./components/Sort/Sort";

function App() {
  const [sortOption, setSortOption] = useState("category");

  return (
    <div>
      <h1>Health Assured Resource Centre</h1>
      {/* Render the Sort component with initial category value with onSortChange function, TODO: Implement sorting functionality */}
      <Sort
        sortBy={sortOption}
        onSortChange={(value) => setSortOption(value)}
      />
      {ResourcesData.map((resource) => (
        <Fragment key={resource.category}>
          <h2>{resource.category}</h2>
          <Card key={resource.id} {...resource} />
        </Fragment>
      ))}
    </div>
  );
}

export default App;
