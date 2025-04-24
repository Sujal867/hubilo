// src/utils/getUniqueCategories.ts
import { providersData } from '../src/data/providers.ts';

export const getUniqueCategories = () => {
  const allCategories = providersData.map((provider) => provider.category.trim());
  return Array.from(new Set(allCategories)); // removes duplicates
};
