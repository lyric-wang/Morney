const localStorageKeyName = "tagList";
const tagListModel = {
  fetch() {
    return JSON.parse(localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
  },
  save(x: RecordItem[]) {
    localStorage.setItem(localStorageKeyName, JSON.stringify(x));
  }
};
export { tagListModel };