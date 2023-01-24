import router from "@/router";

export function storeAuthToken(token) {
  localStorage.setItem('token', token);
  return true;
}

export function getAuthToken(){
  const token = localStorage.getItem('token');
  return token;
}

export function removeAuthToken(){
  localStorage.removeItem('token');
  router.push({'name': 'login'});
}