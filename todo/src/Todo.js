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

        this.$newTask = {
            name: this.$taskName,
            done: false,
        };


        if(this.$tasksData===null){
            this.$tasksData= [];
        };

        this.$tasksData.push(this.$newTask);
    }

    saveState(){
        localStorage.setItem("tasks",JSON.stringify(this.$tasksData));
    }
};


class AllTasks extends HTMLElement {
    constructor() {
        super();
        this.$tasksData = JSON.parse(localStorage.getItem('tasks'));
        this.tasksUpdate();
    }

    tasksUpdate() {
        this.$tasksHTML = ""

        if(this.$tasksData===null){
            this.$tasksHTML = "Pas de tâches à réaliser."
        } else {
            this.$tasksData.forEach(task => {
                this.$tasksHTML+=(`<task-item><label slot="task-name" for="task-done">${task.name}</label></task-item>`)
            }); 
        }
        
        this.innerHTML= this.$tasksHTML;
    }

};

class TaskItem extends HTMLElement {

    constructor() {
        super();
        const templateTask = document.getElementById("task-item").content;
        this.appendChild(templateTask.cloneNode(true));
    }

};


customElements.define("add-task",AddTask);
customElements.define("all-tasks",AllTasks);
customElements.define("task-item",TaskItem);