import { CardProps } from "../types/card";

export const sortByCategory = (resources: CardProps[]) => {
  return resources.sort((a, b) => a.category.localeCompare(b.category));
};

export const sortByDate = (resources: CardProps[]) => {
  return resources.sort(
    (a, b) =>
      new Date(a.date_uploaded).getTime() - new Date(b.date_uploaded).getTime(),
  );
};
