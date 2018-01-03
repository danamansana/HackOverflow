import * as ItemUtil from "../util/item_util.js";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

export const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  };
};

export const fetchItems = () => dispatch => {
  return ItemUtil.fetchQuestions().then(items => dispatch(receiveItems(items)));
};
