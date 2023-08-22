url=new URL(location.href)
title=url.searchParams.get('title')
id=url.searchParams.get('id')
textarea=document.querySelector('textarea')
button=document.querySelector('.save')
document.querySelector('title').innerText=title
a=document.querySelectorAll('.controls a')[0]
a.innerHTML=title
document.querySelectorAll('.controls li').forEach((li)=>{
  li.onclick=async()=>{
    document.querySelectorAll('.active').forEach((a)=>{a.className=''})
    li.className='active'
request=await fetch(`https://editor-k5t5.onrender.com/projects/file:${id}/:${li.id}`,{
    method:'GET',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    } 
  })
  requestFinal=await request.json()
  textarea.value=requestFinal
  }
  
})
play=document.querySelector('img')
if(a.innerHTML==""){
  location.href='index.html'
}
async function allFiles(){
  htmlRequest=await fetch(`https://editor-k5t5.onrender.com/projects/file:${id}/:html`,{
    method:'GET',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    } 
  })
  html=await htmlRequest.json()
  cssRequest=await fetch(`https://editor-k5t5.onrender.com/projects/file:${id}/:css`,{
    method:'GET',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    } 
  })
  css=await cssRequest.json()
  jsRequest=await fetch(`https://editor-k5t5.onrender.com/projects/file:${id}/:script`,{
    method:'GET',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    } 
  })
  js=await jsRequest.json()
  localStorage.setItem('files',JSON.stringify({
    html:html,
    css:css,
    js:js
  }))
}
play.onclick=async()=>{
data=await allFiles()
  location.href=`playground.html`
}
button.onclick=async()=>{
  request=await fetch(`https://editor-k5t5.onrender.com/projects/:${id}/:${document.querySelector('.active').id}`,{
    method:'PUT',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    },
    body:JSON.stringify({data:textarea.value})
  })
  requestFinal=await request.json()
  if (!request.ok) {
    alert(request.error)
  }
  if (request.ok) {
    button.style.animation="fade 2s"
  }
}
async function run() {
  document.querySelector('li').className="active"
  htmlRequest=await fetch(`https://editor-k5t5.onrender.com/projects/file:${id}/:html`,{
    method:'GET',
    headers: {
        "Content-type": "application/json","auth":localStorage.getItem('token')
    } 
  })
  html=await htmlRequest.json();
  textarea.value=html
}
run().then((a)=>{})