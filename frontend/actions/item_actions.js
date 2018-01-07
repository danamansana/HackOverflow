import * as ItemUtil from "../util/item_util.js";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_WITH_DESCENDENTS = 'RECEIVE_ITEM_WITH_DESCENDENTS';
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveItemWithDescendents = (response) => {
  return {
    type: RECEIVE_ITEM_WITH_DESCENDENTS,
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

export const receiveItem = (item) => {
  return {
    type: RECEIVE_ITEM,
    item
  };
};

export const fetchItems = () => dispatch => {
  return ItemUtil.fetchQuestions().then(items => dispatch(receiveItems(items)));
};

export const fetchItem = (id) => dispatch => {
  return ItemUtil.fetchItem(id).then(response => dispatch(receiveItemWithDescendents(response)));
};

export const createItem = (item) => dispatch => {
  debugger
  return ItemUtil.createItem(item).then(item => dispatch(receiveItem(item)));
};

export const updateItem = (item) => dispatch => {
  return ItemUtil.updateItem(item).then(item => dispatch(receiveItem(item)));
}
