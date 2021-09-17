const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const checkBtn = document.querySelector(".check");
const uncheckBtn = document.querySelector(".uncheck");
const deleteBtn = document.querySelectorAll(".delete-btn");
const items = JSON.parse(localStorage.getItem("items")) || [];

const addItem = function (e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  setLocalStorage(items);
  this.reset();
};

const populateList = function (items = [], itemsList) {
  itemsList.innerHTML = items
    .map((item, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        item.done ? "checked" : ""
      } >
            <label for="item${i}">${item.text}</label>

            <button class="delete-btn" data-index=${i}>✖</button>
        </li>
        `;
    })
    .join("");
};

const toggleDone = function (e) {
  if (!e.target.closest("input")) return;

  const el = e.target.closest("input");
  const index = el.dataset.index;
  items[index].done = !items[index].done;

  setLocalStorage(items);
  populateList(items, itemsList);
};

const checkItems = function () {
  items.forEach(item => (item.done = true));
  setLocalStorage(items);
  populateList(items, itemsList);
};

const uncheckItems = function () {
  items.forEach(item => (item.done = false));
  setLocalStorage(items);
  populateList(items, itemsList);
};

const deleteItem = function (e) {
    const el = e.target.closest(".delete-btn");
    const index = el.dataset.index;
    items.pop(index);
    setLocalStorage(items);
    populateList(items, itemsList);
};

const setLocalStorage = function (items) {
  localStorage.setItem("items", JSON.stringify(items));
};

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
itemsList.addEventListener("click", deleteItem);
checkBtn.addEventListener("click", checkItems);
uncheckBtn.addEventListener("click", uncheckItems);


populateList(items, itemsList);
