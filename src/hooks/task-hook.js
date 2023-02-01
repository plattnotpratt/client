import router from '@/router';
const API_URL = 'http://localhost:4242/api/v1';


export async function getTasksFromBoard(id){
  const response = await fetch(`${API_URL}/boards/${id}`, {
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
  });
  const board = await response.json();
  return board.tasks;
}

export async function getTask(taskId){
  const response = await fetch(`${API_URL}/tasks/${taskId}`,{
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
  });
  const task = await response.json();
  return task;
}


export async function createTask(task, boardId){
  const response = await fetch(`${API_URL}/tasks/${boardId}`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(task),
  });
  if(response.ok){
    router.push({name: 'dashboard'});
  }else{
    return response.error;
  }
}

export async function toggleCompletedTask(taskId){
  const task = await getTask(taskId);
  console.log(task.completed);
  task.completed = !task.completed;
  console.log(task.completed);

  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify(task),
  });
  if(response.ok){
  }else{
    return response.error;
  }
}