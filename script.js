var login=document.querySelector('nav a')
var addBtn=document.querySelector('.new-project-btn')
var addProjectSection=document.querySelector('.new-project')
var createBtn=document.querySelector('#create')
var title=document.querySelector('#title')
var deleteBtn=document.querySelectorAll('.delete')
addBtn.onclick=()=>{
  addProjectSection.style.display='grid'
  addBtn.style.display='none'
}
createBtn.onclick=async()=>{
  await createProject(title.value)
}

window.addEventListener('load',async function(){
  auth()
  await getProjects()
document.querySelectorAll('.delete').forEach((btn)=>{
    btn.onclick=async()=>{
  request=await fetch(`https://editor-k5t5.onrender.com/projects/:${btn.id}`,{
    method:'DELETE',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    }
  })
  if(request.ok){
    location.reload()
  }
    }
  })
}) 
  
  
  
  
  
  
  
