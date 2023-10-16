import tasksManager from "./TasksManager.js";

class AddTask extends HTMLElement {

    constructor() {
        super();
        this.$tasksData = JSON.parse(localStorage.getItem('tasks'));
        const templateAddTask = document.getElementById("add-task").content;
        this.appendChild(templateAddTask.cloneNode(true));

        this.$form = this.querySelector("form");
        this.$form.addEventListener('submit', (e) => this.handleSubmit(e))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.$formData = new FormData(e.target);
        this.$taskName = this.$formData.get('task-name');

        tasksManager.addTask(this.$taskName);
    }
};

customElements.define("add-task",AddTask);
export default AddTask;