const taskInput = document.getElementById('formInputTaskName');
const task_name = taskInput.value;
const statusSelect = document.getElementById('formSelectStatus');
const option = statusSelect.option;
const selectedIndex = statusSelect.selectedIndex;
const status = options[selectedIndex].text;

if(!task_name){
    alert('Enter a name user');
    return;
}
const res = await addTask({task_name, status });
if (res = null){
    const now = new Date().toISOString();
    const newTask = [{task_name,statusSelect, created_date: now}];
    const listGroup = document.getElementById('task-list');

    if(!listGroup){
        const tasksDiv = inst.createdTaskListParent();
        inst.buildTasksList(tasksDiv, newTask);
    }
    else {
        inst.buildTasksList(listGroup, newTask);
    }
    }
    taskInput.value='';

};
