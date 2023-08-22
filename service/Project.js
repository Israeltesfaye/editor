var db=[{
  title:'kiya'
}]
async function createProject(title){
 request=await fetch('https://editor-k5t5.onrender.com/projects/',{
    method:'POST',
    body:JSON.stringify({
      title:title
    }),
    headers: {
        "Content-type": "application/json",
        "auth":localStorage.getItem('token')
    } 
  });
    location.reload()
}

async function getProjects(){
  if (localStorage.getItem('token')) {
    request=await fetch('https://editor-k5t5.onrender.com/projects/',{
    method:'GET',
    headers: {
        "Content-type": "application/json",
        "auth":localStorage.getItem('token')
    } 
  })
  requestFinal=await request.json()
    requestFinal.forEach((project) => {
      var p = document.createElement('p')
      p.innerHTML = `<div><a href=editor.html?title=${project.title}&id=${project.id}>${project.title}</a><img class='delete'
      id=${project.id}
      src="https://img.icons8.com/material-sharp/24/913831/filled-trash.png"></img></a></div>`
      document.querySelector('.projects').appendChild(p)
    })
  }
}