const unOrdList = document.getElementById("list");
const listId = document.getElementById("listitem");

document.getElementById("submit").addEventListener("click", addToList);

function addToList() {
    let listValue = listId.value;
    console.log(listValue);
    const newListItem = document.createElement("li");
    let node = document.createTextNode(listValue);
    newListItem.appendChild(node);
    unOrdList.appendChild(newListItem);
}