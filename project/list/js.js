let items = [];
const itemsDiv = document.getElementById("itemsList");
const input = document.getElementById("itemsInput");
const addButton = document.getElementById("addButton");
const storageKey = "items";

// Load items when the document is ready
document.addEventListener("DOMContentLoaded", loadItems);

// Add event listener for the "Enter" key on the input field
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addButton.click();
  }
});

// Add event listener for the add button
addButton.addEventListener("click", addItems);

// Load items from local storage
function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) {
    items = JSON.parse(oldItems);
  }
  renderItems();
}

// Save items to local storage
function saveItems() {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

// Render items to the DOM
function renderItems() {
  itemsDiv.innerHTML = ""; // Clear the items div
  items.forEach((item, idx) => {
    const container = document.createElement("div");
    container.classList.add("item-container");

    const text = document.createElement("p");
    text.classList.add("item-text");
    if (item.completed) {
      text.classList.add("completed");
    }
    text.textContent = item.text;

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.textContent = item.completed ? "Undo" : "Complete";
    completeButton.addEventListener("click", () => toggleComplete(idx));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => removeItems(idx));

    container.appendChild(text);
    container.appendChild(completeButton);
    container.appendChild(deleteButton);
    itemsDiv.appendChild(container);
  });
}

// Add a new item to the list
function addItems() {
  const value = input.value.trim();
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }
  items.push({ text: value, completed: false });
  renderItems();
  input.value = "";
  saveItems();
}

// Remove an item from the list
function removeItems(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

// Toggle completion status of an item
function toggleComplete(idx) {
  items[idx].completed = !items[idx].completed;
  renderItems();
  saveItems();
}
