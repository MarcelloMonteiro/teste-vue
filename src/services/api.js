
import axios from 'axios';

const ApiService = {
    getAllTasks() {
        return axios.get('http://127.0.0.1:8000/tasks');
    },
    createTask(taskData) {
        return axios.post('http://127.0.0.1:8000/tasks', taskData);
    },
    updateTask(taskId, taskData) {
        return axios.put(`http://127.0.0.1:8000/tasks/${taskId}`, taskData);
    },
    deleteTask(taskId) {
        return axios.delete(`http://127.0.0.1:8000/tasks/${taskId}`);
    }
};

export default ApiService;
