function logout(){
  localStorage.removeItem('token')
  location.reload()
}


function auth() {
  if (localStorage.getItem('token') !== null) {
    login.innerHTML = 'Logout'
  }
  else{
    location.href='register.html'
  }
  login.onclick = () => {
    if (login.innerHTML == 'Logout') {
      logout()
    }
    else{
      location.href='register.html'
    }
  }

}