const localStorageKeyName = "tagList";
type tagListModel = {
  tagList: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => void;
};
type Tag = {
  id: string;
  name: string;
};
const tagListModel: tagListModel = {
  tagList: [],
  fetch() {
    this.tagList = JSON.parse(
      localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.tagList;
  },
  save() {
    localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  },
  create(name) {
    this.tagList.push({ id: name, name: name });
    this.save();
  },
};
export { tagListModel };
