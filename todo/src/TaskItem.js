import tasksManager from "./TasksManager.js";

class TaskItem extends HTMLElement {

    constructor() {
        super();
        const templateTask = document.getElementById("task-item").content;
        this.appendChild(templateTask.cloneNode(true));

        this.$delete = this.querySelector("#delete");
        this.$delete.addEventListener('click', (e) => tasksManager.deleteTask(e));

    }

};

customElements.define("task-item",TaskItem);
export default TaskItem;