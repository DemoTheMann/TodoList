class TasksManager {
    constructor() {
        this.tasks = [];
        this.subscribers = [];
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    addTask() {
        
        this.subscribers.forEach(subscriber => subscriber())
    }

}

const tasksManager = new TasksManager();
export default tasksManager;