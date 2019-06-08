import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./articlesActions";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import { getFormattedUrlByCriteria } from "../utils/Formatter";
import { API_URL } from "../config/api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Articles Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should create an function to fetch articles", () => {
    const testcriteria = "/Articles/facebook/1";
    fetchMock.getOnce(getFormattedUrlByCriteria(testcriteria, API_URL), {
      body: { results: [] }
    });

    expect(typeof ActionCreators.fetchArticles(testcriteria)).toEqual(
      "function"
    );
  });

  it("creates FETCHED_POSTS when fetching articles has been done", () => {
    //TODO: Enhance
    const testcriteria = "/Articles/facebook/1";

    fetchMock.getOnce(getFormattedUrlByCriteria(testcriteria, API_URL), {
      body: { results: [] }
    });

    const expectedActions = [
      { type: ActionTypes.FETCHING_POSTS, articles: { isFetching: true } },
      {
        type: ActionTypes.FETCHED_POSTS,
        articles: { items: [], isFetching: false }
      }
    ];
    const store = mockStore({ articles: { items: [], isFetching: false } });

    return store
      .dispatch(ActionCreators.fetchArticles(testcriteria))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
