import tasksManager from "./TasksManager.js";

class AllTasks extends HTMLElement {
    constructor() {
        super();
        this.$tasksData = tasksManager.tasks
        this.tasksUpdate();
        tasksManager.subscribe(()=>console.log("updated tasks"));
        tasksManager.subscribe(this.tasksUpdate.bind(this));
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

customElements.define("all-tasks",AllTasks);
export default AllTasks;