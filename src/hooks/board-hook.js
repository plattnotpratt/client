
const API_URL = 'http://localhost:4242/api/v1';
import router from '@/router';
import { Router } from 'vue-router';

export async function removeBoard(id){
  const API_URL = `${API_URL}/boards/${id}`;
  const response = await fetch(API_URL, {
    method: "DELETE", 
    headers : {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    }
  });
  
  router.push({name: 'dashboard'});
}
export async function getBoard(id){
  const response = await fetch(`${API_URL}/boards/${id}`, {
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
  });
  const board = await response.json();
  return board;
}

export async function getBoards() {
  const response = await fetch(`${API_URL}/boards/`, {
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
  });
  const boards = await response.json();
  return boards;
}

export async function updateBoard() {
  const response = await fetch(`${API_URL}/boards/`, {
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
    body:JSON.stringify({
      title: title.value,
      description: description.value,
    }),
  });
  router.push({name: 'dashboard'});
}

export async function createBoard(board) {
  const response = await fetch(`${API_URL}/boards/`, {
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
    body:JSON.stringify(board),
  });
  router.push({name: 'dashboard'});
}