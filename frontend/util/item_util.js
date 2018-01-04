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
