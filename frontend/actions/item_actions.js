import * as ItemUtil from "../util/item_util.js";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveItem = (response) => {
  debugger
  return {
    type: RECEIVE_ITEM,
    items: response.items,
    likes: response.likes
  };
};

export const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  };
};

export const fetchItems = () => dispatch => {
  return ItemUtil.fetchQuestions().then(items => dispatch(receiveItems(items)));
};

export const fetchItem = (id) => dispatch => {
  return ItemUtil.fetchItem(id).then(response => dispatch(receiveItem(response)));
};
