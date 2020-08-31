import { clone } from "@/lb/clone";

const localStorageKeyName = "recordList";

const recordListModel = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.recordList)
    );
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.date = new Date();
    this.recordList && this.recordList.push(record2);
    recordListModel.saveRecords();
  },
};

recordListModel.fetchRecords();

export { recordListModel };
