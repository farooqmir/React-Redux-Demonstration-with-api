import {
  FETCHED_POSTS,
  FETCHING_POSTS,
  FETCH_POSTS,
  SEARCHING_POSTS,
  SEARCH_POSTS,
  VIEW_ARTICLE
} from "../constants/actionTypes";

import objectAssign from "object-assign";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function articlesReducer(state = initialState.articles, action) {
  let newState;
  switch (action.type) {
    case FETCH_POSTS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return state;

    case FETCHING_POSTS:
      newState = objectAssign({}, state, { isFetching: true });
      return newState;

    case FETCHED_POSTS:
      newState = objectAssign({}, state, action.articles, {
        isFetching: false
      });
      return newState;

    case SEARCHING_POSTS:
      newState = objectAssign({}, state, { isFetching: true });
      return newState;

    case VIEW_ARTICLE:
      newState = objectAssign({}, state);
      const foundarticles = newState.items.filter(article => {
        return article.id == action.articles.id;
      });

      newState.article = !foundarticles.length ? {} : foundarticles[0];
      return newState;
    case SEARCH_POSTS:
      newState = objectAssign({}, state, {
        isFetching: false,
        searchText: action.articles.searchText,
        isSearching: action.articles.searchText.trim() != "",
        filteredItems:
          action.articles.searchText.trim() == "" ? [] : action.articles.items
      });

      if (newState.isSearching) {
        newState.filteredItems = newState.items.filter(
          item =>
            item.title &&
            ~item.title.toLowerCase().indexOf(newState.searchText.toLowerCase())
        );
      }

      return newState;

    default:
      return state;
  }
}
