import * as ItemUtil from "../util/item_util.js";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveItem = (item) => {
  return {
    type: RECEIVE_ITEM,
    item
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
  return ItemUtil.fetchItem(id).then(item => dispatch(receiveItem(item)));
};
