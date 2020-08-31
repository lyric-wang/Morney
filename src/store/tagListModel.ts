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
  create() {
    const inputInfo = window.prompt("请输入标签名");
    if (inputInfo === "") {
      window.alert("标签名不能为空");
    } else if (this.tagList.map(item => item.name).indexOf(inputInfo!) >= 0) {
      window.alert("标签已存在");
    } else if (inputInfo === null || inputInfo === undefined) {
      return;
    } else {
      this.tagList.push({ id: createId().toString(), name: inputInfo });
      this.save();
      return this.tagList;
    }
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
