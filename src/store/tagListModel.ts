import { createId } from "@/lb/createId";

const localStorageKeyName = "tagList";
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
    this.tagList.push({ id: createId().toString(), name: name });
    this.save();
    return this.tagList;
  },
  remove(index) {
    console.log(index);
    this.tagList.splice(index, 1);
    this.save();
  },
  UpdateTag(tag: Tag) {
    const index = this.tagList.map((item) => item.id).indexOf(tag.id);
    this.tagList[index].name = tag.name;
    this.save();
  },
};
tagListModel.fetch();
export { tagListModel };
