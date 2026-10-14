import { CardProps } from "../types/card";

export const filterResources = (resources: CardProps[], filterText: string) => {
  if (!filterText) {
    return resources;
  }

  const lowerCaseFilterText = filterText.toLowerCase();

  return resources.filter((resource) => {
    const lowerCaseTitle = resource.title.toLowerCase();
    const lowerCaseTags = resource.tags.map((tag) => tag.toLowerCase());

    return (
      lowerCaseTitle.includes(lowerCaseFilterText) ||
      lowerCaseTags.some((tag) => tag.includes(lowerCaseFilterText))
    );
  });
};
