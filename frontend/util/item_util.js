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
    data: {item}
  });
};

export const updateItem = (item) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/items/${item.id}`,
    data: {item}
  });
};

export const createLike = (like) => {
  return $.ajax({
    method: "POST",
    url: '/api/likes',
    data: {like}
  });
};
