let items = [];
const itemsDiv = document.getElementById("Items");
const input = document.getElementById("itemsInput");
const storageKey = "items";

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myButton").click();
  }
});

function renderItems() {
  itemsDiv.innerHTML = null;
  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.margin = "10px";
    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.fontSize = "1.5rem";
    text.style.borderBottom = "2px solid black";
    text.textContent = item;
    const button = document.createElement("button");
    button.textContent = "delete";
    button.onclick = () => removeItems(idx);
    container.appendChild(text);
    container.appendChild(button);
    itemsDiv.appendChild(container);
  }
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

function addItems() {
  const value = input.value;
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }
  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItems(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
