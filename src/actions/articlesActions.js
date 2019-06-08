import * as types from "../constants/actionTypes";
import { getFormattedUrlByCriteria } from "../utils/Formatter";
import { API_URL } from "../config/api";

/**
 * @export
 * @param {*} criteria- referes to the criteria (Artiles types)
 * @returns {promise} Fetched Articles from NyTimes
 */
export function fetchArticles(criteria) {
  return function(dispatch) {
    dispatch({
      type: types.FETCHING_POSTS,
      articles: { isFetching: true }
    });
    return fetch(getFormattedUrlByCriteria(criteria, API_URL))
      .then(
        res => res.json(),
        error => {
          //TODO: Dispatch a relevant action here
          console.log("Opps! An error occured while fetching articles!");
        }
      )
      .then(res => {
        dispatch({
          type: types.FETCHED_POSTS,
          articles: { items: res.results, isFetching: false }
        });
      });
  };
}

/**
 * SearchArticlesByText function searches an Articles with given key
 * @export
 * @param {*} searchText - search key that user is typing to search Articles
 * @param {*} done_ - flag is used to signify if search is in progress
 */
export function SearchArticlesByText(searchText, done_) {
  return function(dispatch, getState) {
    if (!done_) {
      dispatch({
        type: types.SEARCHING_POSTS,
        articles: { isFetching: true }
      });
    } else {
      dispatch({
        type: types.SEARCH_POSTS,
        articles: {
          items: getState().articles.items,
          isFetching: false,
          searchText: searchText
        }
      });
    }
  };
}

/**
 * fetchArticleById function searches an Articles with given key
 * @export
 * @param {*} fetchArticleById - search key that user is typing to search Articles
 */
export function fetchArticleById(articleId) {
  return function(dispatch, getState) {
    dispatch({
      type: types.VIEW_ARTICLE,
      articles: {
        items: getState().articles.items,
        id: articleId
      }
    });
  };
}
