export const fetchQuestions = () => {
  return $.ajax({
    method: "GET",
    url: "/api/items"
  });
};

export const fetchItem = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/items/${id}`
  });
};

export const createItem = (item) => {
  return $.ajax({
    method: "POST",
    url: "api/items",
    item
  });
};

export const updateItem = (item) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/items/${item.id}`,
    item
  });
};
