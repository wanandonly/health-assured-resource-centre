import { sortByCategory, sortByDate } from "../utils/sort";
import ResourcesData from "../config/resources.json";

describe("sortByCategory", () => {
  test("sorts resources by category correctly", () => {
    const sortedResources = sortByCategory(ResourcesData);
    expect(sortedResources[0].category).toBe("Articles");
    expect(sortedResources[1].category).toBe("Fitness");
    expect(sortedResources[2].category).toBe("Meditation");
    expect(sortedResources[3].category).toBe("Newsletters");
    expect(sortedResources[4].category).toBe("Podcasts");
    expect(sortedResources[5].category).toBe("Recipes");
  });
  test("handles empty array", () => {
    const sortedResources = sortByCategory([]);
    expect(sortedResources).toEqual([]);
  });
});

describe("sortByDate", () => {
  test("sorts resources by date correctly", () => {
    const sortedResources = sortByDate(ResourcesData);
    expect(sortedResources[0].date_uploaded).toBe("2025-06-22");
    expect(sortedResources[1].date_uploaded).toBe("2025-07-10");
    expect(sortedResources[2].date_uploaded).toBe("2025-07-15");
    expect(sortedResources[3].date_uploaded).toBe("2025-07-28");
    expect(sortedResources[4].date_uploaded).toBe("2025-08-01");
    expect(sortedResources[5].date_uploaded).toBe("2025-08-05");
  });
  test("handles empty array", () => {
    const sortedResources = sortByDate([]);
    expect(sortedResources).toEqual([]);
  });
});
