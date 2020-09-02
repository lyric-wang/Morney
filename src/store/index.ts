import Vue from "vue";
import Vuex from "vuex";
import { createId } from "@/lb/createId.ts";
import { clone } from "@/lb/clone.ts";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tagList: [],
    recordList: [],
  } as stateRoot,
  mutations: {
    fetchTags(state) {
      state.tagList = JSON.parse(localStorage.getItem("tagList") || "[]");
    },
    saveTags(state) {
      localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
    createTags(state) {
      const inputInfo = window.prompt("请输入标签名");
      if (inputInfo === "") {
        window.alert("标签名不能为空");
      } else if (
        state.tagList.map((item) => item.name).indexOf(inputInfo!) >= 0
      ) {
        window.alert("标签已存在");
      } else if (inputInfo === null || inputInfo === undefined) {
        return;
      } else {
        state.tagList.push({ id: createId().toString(), name: inputInfo });
        store.commit("saveTags");
      }
    },
    removeTags(state, index) {
      console.log(index);
      state.tagList.splice(index, 1);
      store.commit("saveTags");
    },
    UpdateTags(state, tag: Tag) {
      const index = state.tagList.map((item) => item.id).indexOf(tag.id);
      state.tagList[index].name = tag.name;
      store.commit("saveTags");
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordItem[];
      return state.recordList;
    },
    saveRecords(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.date = new Date().toISOString();
      state.recordList && state.recordList.push(record2);
      store.commit("saveRecords");
    },
  },
});
store.commit("fetchTags");
store.commit("fetchRecords");
export { store };
