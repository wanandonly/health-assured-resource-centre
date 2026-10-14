import { filterResources } from "../utils/filter";
import ResourcesData from "../config/resources.json";

describe("filterResources", () => {
  test("filters resources by title correctly", () => {
    const filteredResources = filterResources(ResourcesData, "Wellness Weekly");
    expect(filteredResources.length).toBe(1);
    expect(filteredResources[0].title).toBe("Wellness Weekly");
  });
  test("filters resources by tag correctly", () => {
    const filteredResources = filterResources(ResourcesData, "energy");
    expect(filteredResources.length).toBe(2); // Because we have 2 resources with the tag "energy"
    expect(filteredResources[0].tags).toContain("energy");
    expect(filteredResources[1].tags).toContain("energy");
  });
  test("returns all resources when filter text is empty", () => {
    const filteredResources = filterResources(ResourcesData, "");
    expect(filteredResources).toEqual(ResourcesData);
  });
});
