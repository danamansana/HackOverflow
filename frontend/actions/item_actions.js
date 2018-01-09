import * as ItemUtil from "../util/item_util.js";

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM_WITH_DESCENDENTS = 'RECEIVE_ITEM_WITH_DESCENDENTS';
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_LIKE = "RECEIVE_LIKE";


export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like: like
  };
};

export const receiveItemWithDescendents = (response) => {
  return {
    type: RECEIVE_ITEM_WITH_DESCENDENTS,
    items: response.items,
    likes: response.likes,
    users: response.users
  };
};

export const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  };
};

export const receiveItem = (itemPayload) => {

  return {
    type: RECEIVE_ITEM,
    item: itemPayload.item,
    user: itemPayload.user
  };
};

export const fetchItems = (query) => dispatch => {
  let x = query;

  return ItemUtil.fetchQuestions(query).then(items => dispatch(receiveItems(items)));
};

export const fetchItem = (id) => dispatch => {
  return ItemUtil.fetchItem(id).then(response => dispatch(receiveItemWithDescendents(response)));
};

export const createItem = (item) => dispatch => {

  return ItemUtil.createItem(item).then(itemPayload => dispatch(receiveItem(itemPayload)));
};

export const updateItem = (item) => dispatch => {
  return ItemUtil.updateItem(item).then(itemPayload => dispatch(receiveItem(itemPayload)));
};

export const createLike = (like) => dispatch => {
  return ItemUtil.createLike(like).then(like => dispatch(receiveLike(like)));
};

export const search = (terms) => dispatch => {
  return ItemUtil.search(terms).then(items => dispatch(receiveItems(items)));
};

export const deleteItem = (id) => dispatch => {
  return ItemUtil.deleteItem(id);
};
