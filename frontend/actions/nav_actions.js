export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const updateFilters = (query) => {
  return {
    type: UPDATE_FILTERS,
    query
  };
};
