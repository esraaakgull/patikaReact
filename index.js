let data = [];
const makeApiRequest = async () => {
    const loadingBox = document.getElementsByClassName("loading");
    const listItemsBox = document.getElementsByClassName("listItemsBox");
    const api = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    const res = await fetch(api);
    data = await res.json();
    data.map(item => {
        const ul = document.getElementById("items");
        const li = document.createElement("li");
        const status = item.checked ? "Completed" : "Uncompleted";
        li.innerText = item.title + ", " + status;
        ul.appendChild(li);
    })
    loadingBox[0].style.display = 'none';
    listItemsBox[0].style.display = 'flex';
}

makeApiRequest();


const button = document.getElementById("submitBtn");
button.addEventListener("click", handleAdd);

function handleAdd() {
    const titleInput = document.getElementById("title");
    const completedInput = document.getElementById("completed");
    const title = titleInput.value;
    const isCompleted = completedInput.checked;
    data.push({
        userId: data.length + 1,
        id: data.length + 1,
        title: title,
        completed: isCompleted
    })
    const ul = document.getElementById("items");
    const li = document.createElement("li");
    const status = isCompleted ? "Completed" : "Uncompleted";
    li.innerText = title + ", " + status;
    ul.appendChild(li);

    titleInput.value = "";
    completedInput.checked = false;

}

