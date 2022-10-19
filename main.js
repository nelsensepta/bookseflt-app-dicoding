const storageKey = "List Buku";

const formAddingBook = document.getElementById("inputBook");
const formSearchingBook = document.getElementById("searchBook");

function CheckForStorage() {
  return typeof Storage !== "undefined";
}
