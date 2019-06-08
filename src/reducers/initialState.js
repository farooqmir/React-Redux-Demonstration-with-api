export default {
  articles: {
    items: [], // represents articles
    isFetching: false, // represents the article fetching STATE
    searchText: "", // key with user is searching
    isSearching: false, // user is in process of searching for articles - typing
    filteredItems: [], // article found in the search
    article: {} // article user is viewing
  }
};
