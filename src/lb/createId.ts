let id = parseInt(localStorage.getItem("idMax") || "0");
function createId() {
  id++;
  localStorage.setItem("idMax", id.toString());
  return id;
}
export { createId };
