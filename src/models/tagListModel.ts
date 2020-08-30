const localStorageKeyName = "tagList";
const tagListModel = {
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKeyName) || "[]");
  },
};
