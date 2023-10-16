class TasksManager {
    constructor() {
        this.tasks = [];
        this.subscribers = [];
        this.fetchLocalStorage();
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    addTask(taskName) {
        const newTask = {
            name: taskName,
            done: false,
        };

        this.tasks.push(newTask);

        this.subscribers.forEach(subscriber => subscriber());
        this.saveState();
    }

    deleteTask(e) {

        e.target.parentElement.remove();
    }
    
    
    fetchLocalStorage() {
        this.storage = JSON.parse(localStorage.getItem("tasks"));
        console.log(this.tasks);
        if(this.storage != null) {
            this.storage.forEach(task => {
                this.tasks.push(task);
            });
        };
        console.log(this.tasks);
    }

    saveState(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
    }

}

const tasksManager = new TasksManager();
export default tasksManager;