const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    let item = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = "❌";
    list.appendChild(listItem);
    
    deleteBtn.addEventListener("click", function() {
        list.removeChild(listItem);
    })
    input.focus();
})
