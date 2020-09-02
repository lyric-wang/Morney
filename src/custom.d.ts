type RecordItem = {
  selectedTags: string[];
  note: string;
  type: string;
  output: string;
  date?: Date; //意思就是date可以不存在
};
type tagListModel = {
  tagList: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: () => Tag[] | void;
  remove: (index: number) => void;
  UpdateTag: (tag: Tag) => void;
};
type Tag = {
  id: string;
  name: string;
};
type stateRoot = {
  tagList: Tag[];
  recordList: RecordItem[];
};
type NameTable = { name: string; value: string }[];
