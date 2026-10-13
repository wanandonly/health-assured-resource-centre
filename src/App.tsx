import { Fragment } from "react";
import ResourcesData from "./config/resources.json";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      {ResourcesData.map((resource) => (
        <Fragment key={resource.category}>
          <h2>{resource.category}</h2>
          <Card
            key={resource.title}
            title={resource.title}
            image={resource.thumbnail}
            tags={resource.tags}
            watchTime={resource.duration}
          />
        </Fragment>
      ))}
    </div>
  );
}

export default App;
